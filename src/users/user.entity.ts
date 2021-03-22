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
import { DocumentType } from './document-type/document-type.entity';

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
  ///////////////////////////////// asdasd

  @Field(type => String, { nullable: true })
  @Column()
  student_residency: string;

  @Field(type => String, { nullable: true })
  @Column()
  rent_status: string;

  @Field(type => String, { nullable: true })
  @Column()
  kids: string;

  @Field(type => String, { nullable: true })
  @Column()
  below_18: string;

  @Field(type => String, { nullable: true })
  @Column()
  over_18: string;

  ///// mother ////////

  @Field(type => String, { nullable: true })
  @Column()
  mother_fullname: string;

  @Field(type => String, { nullable: true })
  @Column()
  mother_birthdate: string;

  @Field(type => String, { nullable: true })
  @Column()
  mother_status: string;

  @Field(type => String, { nullable: true })
  @Column()
  mother_occuptation: string;

  @Field(type => String, { nullable: true })
  @Column()
  mother_medical_handicap: string;

  @Field(type => String, { nullable: true })
  @Column()
  mother_in_contact: string;

  //// father ////////

  @Field(type => String, { nullable: true })
  @Column()
  father_fullname: string;

  @Field(type => String, { nullable: true })
  @Column()
  father_birthdate: string;

  @Field(type => String, { nullable: true })
  @Column()
  father_status: string;

  @Field(type => String, { nullable: true })
  @Column()
  father_occuptation: string;

  @Field(type => String, { nullable: true })
  @Column()
  father_medical_handicap: string;

  @Field(type => String, { nullable: true })
  @Column()
  father_in_contact: string;

  //////////////////PRATIM NOSAFIM/////////

  @Field(type => String, { nullable: true })
  @Column()
  student_occupation: string;

  @Field(type => String, { nullable: true })
  @Column()
  student_pay: string;
  /////////////////////////////////

  @Field({ nullable: true })
  @Column()
  password: string;

  @Field({nullable:true})
  @Column()
  is_admin: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  @Field(() => [DocumentType], { nullable: true })
  @OneToMany(
    () => DocumentType,
    documentType => documentType.user,
  )
  documentTypes: DocumentType[];
}
