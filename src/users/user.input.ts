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
import { Field, Int, ObjectType, Directive, InputType } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { DocumentType } from './document-type/document-type.entity';

@InputType()
export class UserInput {
  //{id,idNumber,username,firstName,lastName,previousLastName,birthYear,gender}
  @Field(type => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  idNumber: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  previousLastName: string;

  @Field(type => Int, { nullable: true })
  birthYear: number;

  @Field(type => String, { nullable: true })
  gender: string;
}
