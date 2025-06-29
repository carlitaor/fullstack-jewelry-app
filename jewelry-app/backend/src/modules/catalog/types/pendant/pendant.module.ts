import { Module } from '@nestjs/common';
import { PendantService } from './pendant.service';
import { PendantController } from './pendant.controller';

@Module({
  controllers: [PendantController],
  providers: [PendantService],
})
export class PendantModule {}
