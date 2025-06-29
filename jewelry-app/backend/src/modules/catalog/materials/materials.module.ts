import { Module } from '@nestjs/common';
import { MaterialsService } from './services/materials.service';
import { MaterialsController } from './controllers/materials.controller';

@Module({
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule { }
