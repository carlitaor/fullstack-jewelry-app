import { User } from "src/modules/core/users/entities/user.entity";
import { Budget } from "../../budgets/entities/budget.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  date: Date;

  @OneToMany(() => Budget, (budget) => budget.order)
  budgets: Budget[];

  @ManyToOne(() => User, user => user.orders)
  user: User;
}
