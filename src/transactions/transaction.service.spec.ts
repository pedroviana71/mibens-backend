import { Test } from '@nestjs/testing';
import { TransactionRepository } from './transaction.repository';
import { TransactionService } from './transaction.service';

describe('ExpenseService', () => {
  let transactionService: TransactionService;

  const mockExpenseRepository = jest.fn((dto) => {
    return dto;
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TransactionService,
        {
          provide: TransactionRepository,
          useValue: mockExpenseRepository,
        },
      ],
    }).compile();
    transactionService = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(transactionService).toBeDefined();
  });
});
