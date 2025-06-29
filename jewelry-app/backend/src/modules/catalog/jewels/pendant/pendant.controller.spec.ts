import { Test, TestingModule } from '@nestjs/testing';
import { PendantController } from './pendant.controller';
import { PendantService } from './pendant.service';

describe('PendantController', () => {
  let controller: PendantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendantController],
      providers: [PendantService],
    }).compile();

    controller = module.get<PendantController>(PendantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
