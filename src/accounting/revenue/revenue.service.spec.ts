import { Test } from '@nestjs/testing';
import { RevenueService } from './revenue.service';
import { RevenueRepository } from './revenue.repository';

describe('RevenueService', () => {
  let revenueService: RevenueService;

  const mockRevenueRepository = jest.fn((dto) => {
    return dto;
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RevenueService,
        {
          provide: RevenueRepository,
          useValue: mockRevenueRepository,
        },
      ],
    }).compile();
    revenueService = module.get<RevenueService>(RevenueService);
  });

  it('should be defined', () => {
    expect(revenueService).toBeDefined();
  });
});
