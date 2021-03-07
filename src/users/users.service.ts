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

@Injectable()
export class UsersService {
  constructor(
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
}
