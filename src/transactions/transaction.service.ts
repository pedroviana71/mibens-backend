import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './schemas/transaction.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { addMonths, getDate } from 'date-fns';
import { CreditCard } from 'src/creditCard/schemas/creditCard.schema';
import { UTCDate } from '@date-fns/utc';
interface TransactionParams {
  userId: string;
  startDate: string;
  endDate: string;
}

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,

    @InjectModel(CreditCard.name)
    private creditCardModel: Model<CreditCard>,
  ) {}

  async createTransaction(transactionDto: TransactionDto) {
    const { installments } = transactionDto;

    if (installments > 1) {
      const { installmentsDates, endDate } = await this.createInstallmentDates(
        installments,
        transactionDto,
      );

      transactionDto.installmentsDates = installmentsDates;
      transactionDto.endDate = endDate;
    }

    const transaction = this.transactionModel.create(transactionDto);

    return transaction;
  }

  async getAllExpenses(transactionParams: TransactionParams) {
    const { userId, startDate, endDate } = transactionParams;

    if (!startDate || !endDate) {
      throw new HttpException(
        'startDate and endDate must be provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    const populate = [
      {
        path: 'creditCardId',
        select: 'name color',
      },
      {
        path: 'accountId',
        select: 'name',
      },
    ];

    // TIPOS TRANSACOES
    // 1- single conta
    // 2- single uma parcela cartao credito
    // 3- single varias parcelas cartao credito
    // 4- recurring conta
    // 5- recurring cartao credito
    // 6- recurring conta finalizada
    // 7- recurring cartao credito finalizada
    // 8- conta entre contas

    // const singleAccountAndCreditCard = await this.transactionModel
    //   .find({
    //     userId,
    //     type: 'expense',
    //     paymentType: 'single',
    //     transactionDate: {
    //       $gte: new UTCDate(startDate),
    //       $lte: new UTCDate(endDate),
    //     },
    //     installments: { $lte: 1 },
    //   })
    //   .populate(populate)
    //   .lean();

    // const singleCreditCardWithInstallments = await this.transactionModel
    //   .find({
    //     userId,
    //     type: 'expense',
    //     paymentType: 'single',
    //     installmentsDates: {
    //       $elemMatch: {
    //         $gte: new UTCDate(startDate),
    //         $lte: new UTCDate(endDate),
    //       },
    //     },
    //   })
    //   .populate(populate)
    //   .lean();

    // const openRecurringTransactions = await this.transactionModel
    //   .find({
    //     userId,
    //     paymentType: 'recurring',
    //     startDate: { $lte: new UTCDate(endDate) },
    //     endDate: { $eq: null },
    //   })
    //   .populate(populate)
    //   .lean();

    // const closedRecurringTransactions = await this.transactionModel
    //   .find({
    //     userId,
    //     paymentType: 'recurring',
    //     startDate: { $lte: new UTCDate(endDate) },
    //     endDate: { $gte: new UTCDate(startDate) },
    //   })
    //   .populate(populate)
    //   .lean();

    const transactions = await this.transactionModel
      .find({
        userId,
        $or: [
          // transacoes simples em contas correntes e/ou cartoes de credito no qual foi feita com uma parcela
          // somente ou sem parcela no caso de conta corrente
          {
            type: 'expense',
            paymentType: 'single',
            transactionDate: {
              $gte: new UTCDate(startDate),
              $lte: new UTCDate(endDate),
            },
            $or: [
              { installments: { $lte: 1 } },
              { installments: { $eq: null } },
            ],
          },
          // transacoes simples em cartoes de credito com parcelas
          {
            type: 'expense',
            paymentType: 'single',
            installmentsDates: {
              $elemMatch: {
                $gte: new UTCDate(startDate),
                $lte: new UTCDate(endDate),
              },
            },
          },
          // transacoes recorrentes no qual ainda nao foram finalizadas
          {
            paymentType: 'recurring',
            startDate: { $lte: new UTCDate(endDate) },
            endDate: { $eq: null },
          },
          // transacoes recorrentes finalizadas
          {
            paymentType: 'recurring',
            startDate: { $lte: new UTCDate(endDate) },
            endDate: { $gte: new UTCDate(startDate) },
          },
        ],
      })
      .populate(populate)
      .lean();

    const totalExpensesAmount = transactions.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    return transactions;
  }

  getAllRevenues() {}

  deleteTransaction(id: string) {
    return this.transactionModel.findByIdAndDelete(id);
  }

  async createInstallmentDates(
    installments: number,
    transactionDto: TransactionDto,
  ) {
    const installmentsDates = [];
    const creditCard = await this.creditCardModel
      .findById(transactionDto.creditCardId)
      .lean();

    if (!creditCard) {
      throw new HttpException('Credit card not found', HttpStatus.NOT_FOUND);
    }

    const closingDay = creditCard.closingDay;
    const transactionDay = getDate(new UTCDate(transactionDto.transactionDate));

    // Regra para verificar se a data dos pagamentos das parcelas comecarao no mesmo mes da transacao
    const startCounter = transactionDay < Number(closingDay) ? 0 : 1;
    const counterLimit = startCounter === 0 ? installments - 1 : installments;

    for (let i = startCounter; i <= counterLimit; i++) {
      const installmentDate = addMonths(transactionDto.transactionDate, i);
      installmentsDates.push(installmentDate);
    }

    const endDate = new UTCDate(
      installmentsDates[installmentsDates.length - 1],
    );

    return {
      installmentsDates,
      endDate,
    };
  }
}
