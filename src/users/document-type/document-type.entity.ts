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
import { User } from '../user.entity';

@ObjectType()
@Entity('document_type')
export class DocumentType {
  @Field(type => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  text: string;

  @Field({ nullable: true })
  @Column()
  value: string;

  @ManyToOne(
    () => User,
    user => user.documentTypes,
  )
  user: User;
}
