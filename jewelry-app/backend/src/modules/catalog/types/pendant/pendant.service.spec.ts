import { Test, TestingModule } from '@nestjs/testing';
import { PendantService } from './pendant.service';

describe('PendantService', () => {
  let service: PendantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendantService],
    }).compile();

    service = module.get<PendantService>(PendantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
