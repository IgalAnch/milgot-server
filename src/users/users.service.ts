import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
// import { validate } from 'class-validator';
import { forwardRef, Inject } from '@nestjs/common'; //CardService
import { User } from './user.entity';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
//import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';

import * as bcrypt from 'bcrypt'; //FIND USE FOR THIS OR?
import { AuthService } from '../auth/auth.service';
import { DocumentTypeService } from './document-type/document-type.service';
import { ValuesOfCorrectTypeRule } from 'graphql';
import { identity } from 'rxjs';
import { UserInput } from './user.input';

/*
to-do:
======
*authenticate roles
*1 table interface on admin
*
*/
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => DocumentTypeService))
    public documentTypeService: DocumentTypeService,
    @InjectRepository(User) //experimental repository
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService)) public authService: AuthService,
  ) {}
  async findAll(): Promise<User[]> {
    let all = await this.userRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'username',
        'previousLastName',
        'birthYear',
        'gender',
        'idNumber',
        'password',
      ],
    });
    //await console.log(all);
    return all;
  }

  getRandomInt(max) {
    let n = Math.floor(Math.random() * Math.floor(max));
    return n;
  }

  async findOne(username): Promise<User> {
    let one = await this.userRepository.findOne({ username: username });
    return one;
  }

  /**check user */
  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      const errors = { User: ' not found!' };
      throw new HttpException({ errors }, 401);
    }
    return user;
  }

  /**check user */
  async isEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email: email });
    if (!user) {
      const errors = { User: ' not found!' };
      throw new HttpException({ errors }, 401);
    }
    //
    let n = this.getRandomInt(999);
    user.email = n.toString();
    //
    return user;
  }

  async login() {}

  async getTypesOfDocuments(id: number) {
    await this.documentTypeService.addProductType();
    return await this.userRepository.findOne(id);
  }

  async register(
    username,
    password,
    firstName,
    lastName,
    previousLastName,
    //birthYear,
    gender,
    //idNumber,
  ) {
    let obj = new User();
    obj.username = username;
    obj.password = password;
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.previousLastName = previousLastName;
    obj.gender = gender;

    let user = await this.userRepository.save(obj);
    return user; // NOT null anymore
  }

  async register2(
    username,
    password,
    firstName,
    lastName,
    previousLastName,
    birthYear,
    gender,
    idNumber,
  ) {
    let obj = new User();
    obj.username = username;
    obj.password = password;
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.previousLastName = previousLastName;
    obj.birthYear = birthYear;
    obj.gender = gender;
    obj.idNumber = idNumber;

    let user = await this.userRepository.save(obj);
    return user; // NOT null anymore
  }

  ///TEST
  async testObject(user) {
    let {
      id,
      idNumber,
      firstName,
      lastName,
      gender,
      birthYear,
      previousLastName,
      username,
    } = user;

    let someUser = {
      id: user.id,
      idNumber: user.idNumber,
      firstName: user.firstName,
      gender: user.gender,
      birthYear: user.birthYear,
      lastName: user.lastName,
      previousLastName: user.previousLastName,
      username: user.username,
    };
    let users = await this.userRepository.find({
      where: someUser,
    });
    let firstUser = users[0];
    return firstUser;
  }

  findAllProductTypes(id) {}
}
