import { User } from "src/modules/core/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "../../orders/entities/order.entity";
import { BudgetStatus } from "../enum/budget-status.enum";

@Entity('budgets')
export class Budget {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'jsonb' })
  specifications: Record<string, any>;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'enum', enum: BudgetStatus, default: BudgetStatus.DRAFT })
  status: BudgetStatus;

  @ManyToOne(() => User, { eager: true })
  createdBy: User;

  @ManyToOne(() => User, { nullable: true })
  assignedTo?: User;

  @ManyToOne(() => Order, (order) => order.budgets, { nullable: true })
  order?: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}