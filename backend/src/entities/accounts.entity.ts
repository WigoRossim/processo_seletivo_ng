import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Transactions } from './transactions.entity';

@Entity('accounts')
export class Accounts {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  balance: number;

  @OneToMany(() => Transactions, (transaction) => transaction.debitedAccount, {
    eager: true,
  })
  @JoinColumn()
  transaction_debitedAccount: Transactions[];

  @OneToMany(() => Transactions, (transaction) => transaction.creditedAccount, {
    eager: true,
  })
  @JoinColumn()
  transaction_creditedAccount: Transactions[];
}
