import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`Inserted user with ID: ${this.id}`);
  };

  @AfterUpdate()
  afterUpdate() {
    console.log(`Updated user with ID: ${this.id}`);
  };

  @AfterRemove()
  afterRemove() {
    console.log(`Removed user with ID: ${this.id}`);
  };
};