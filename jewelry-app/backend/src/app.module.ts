import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/core/auth/auth.module';
import { UsersModule } from './modules/core/users/users.module';
import { ProductsModule } from './modules/catalog/products/products.module';
import { CategoriesModule } from './modules/catalog/categories/categories.module';
import { OrdersModule } from './modules/sales/orders/orders.module';
import { RingModule } from './modules/catalog/product-types/ring/ring.module';
import { PendantModule } from './modules/catalog/product-types/pendant/pendant.module';
import { MaterialsModule } from './modules/catalog/materials/materials.module';
import { PaymentsModule } from './modules/sales/payments/payments.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, CategoriesModule, OrdersModule, RingModule, PendantModule, MaterialsModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
