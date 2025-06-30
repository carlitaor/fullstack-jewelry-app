import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/core/auth/auth.module';
import { UsersModule } from './modules/core/users/users.module';
import { ProductsModule } from './modules/catalog/products/products.module';
import { CategoriesModule } from './modules/catalog/categories/categories.module';
import { OrdersModule } from './modules/sales/orders/orders.module';
import { RingModule } from './modules/catalog/jewels/ring/ring.module';
import { PendantModule } from './modules/catalog/jewels/pendant/pendant.module';
import { MaterialsModule } from './modules/catalog/materials/materials.module';
import { PaymentsModule } from './modules/sales/payments/payments.module';
import { ResourcesModule } from './modules/infraestructure/resources/resources.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { BudgetsModule } from './modules/sales/budgets/budgets.module';
import typeormConfig from './config/typeorm.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env.local',
    load: [typeormConfig],
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const typeOrmConfig = config.get<DataSourceOptions>('typeorm');
      return {
        ...typeOrmConfig,
        autoLoadEntities: true,
      };
    },
  }), AuthModule, UsersModule, ProductsModule, CategoriesModule, OrdersModule, RingModule, PendantModule, MaterialsModule, PaymentsModule, ResourcesModule, BudgetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
