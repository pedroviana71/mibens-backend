import { Test } from '@nestjs/testing';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './expense.repository';
import { ExpenseService } from './expense.service';

describe('ExpenseService', () => {
  let expenseService: ExpenseService;

  const mockExpenseRepository = jest.fn((dto) => {
    return dto;
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ExpenseService,
        {
          provide: ExpenseRepository,
          useValue: mockExpenseRepository,
        },
      ],
    }).compile();
    expenseService = module.get<ExpenseService>(ExpenseService);
  });

  it('should be defined', () => {
    expect(expenseService).toBeDefined();
  });
});
