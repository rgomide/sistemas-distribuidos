import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'people' })
export class Person {
  @PrimaryGeneratedColumn()
  id;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Column({ name: 'updated_at', type: 'varchar' })
  updatedAt;
}
