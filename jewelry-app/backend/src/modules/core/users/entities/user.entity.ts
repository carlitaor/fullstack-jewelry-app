import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enums/user-role.enum";
import { UserStatus } from "../enums/user-status.enum";
import { Order } from "src/modules/sales/orders/entities/order.entity";
import { Budget } from "src/modules/sales/budgets/entities/budget.entity";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ name: 'varchar', nullable: true })
  profileImage?: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.FREE })
  role: UserRole;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ type: 'jsonb', nullable: true })
  jewelryPreferences: Record<string, any>;

  @Column({ type: 'date', nullable: true })
  birthdate?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Budget, (budget) => budget.createdBy)
  createdBudgets: Budget[];

  @OneToMany(() => Budget, (budget) => budget.assignedTo)
  assignedBudgets: Budget[];
}