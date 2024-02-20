import { Test } from '@nestjs/testing';
import { TransportationAppService } from './transportation-app.service';
import { TransportationAppRepository } from './transportation-app.repository';

describe('TransportationAppService', () => {
  let transportationAppService: TransportationAppService;

  const mockTransportationAppRepository = jest.fn((dto) => {
    return dto;
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TransportationAppService,
        {
          provide: TransportationAppRepository,
          useValue: mockTransportationAppRepository,
        },
      ],
    }).compile();

    transportationAppService = module.get<TransportationAppService>(
      TransportationAppService,
    );
  });

  it('should be defined', () => {
    expect(transportationAppService).toBeDefined();
  });
});
