import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { UsersModule } from 'src/modules/core/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    UsersModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [TypeOrmModule]
})
export class OrdersModule { }
