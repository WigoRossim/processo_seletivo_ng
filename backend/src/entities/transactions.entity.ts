import {
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Accounts } from './accounts.entity';

@Entity('transactions')
export class Transactions {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Accounts)
  debitedAccount: Accounts;

  @ManyToOne(() => Accounts)
  creditedAccount: Accounts;
}
