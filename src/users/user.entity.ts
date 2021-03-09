import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Field, Int, ObjectType, Directive } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';

@ObjectType()
@Entity('user')
export class User {
  @Field(type => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column()
  idNumber: string;

  @Field({ nullable: true })
  @Column()
  username: string;

  // @Field({ nullable: true })
  // @Column()
  // email: string;

  @Field({ nullable: true })
  @Column()
  firstName: string;

  @Field({ nullable: true })
  @Column()
  lastName: string;

  @Field({ nullable: true })
  @Column()
  previousLastName: string;

  // @Field()
  // @Column({ default: true })
  // isActive: boolean;

  @Field(type => Int, { nullable: true })
  @Column()
  birthYear: number;

  @Field(type => String, { nullable: true })
  @Column()
  gender: string;

  @Field({ nullable: true })
  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
