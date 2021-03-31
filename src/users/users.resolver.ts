import {
  Args,
  Context,
  Resolver,
  ResolveField,
  Query,
  Int,
  Parent,
  Mutation,
  Directive,
  Subscription,
  GraphQLExecutionContext,
} from '@nestjs/graphql';
//Entity+Model
import { User } from './user.entity'; //Entity+Model
import { UsersService } from './users.service';

import { PubSub } from 'graphql-subscriptions';
import { Res, UseGuards, All } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AppController } from '../app.controller';
import { UserInput } from './user.input';

const pubSub = new PubSub();

@Resolver(User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    public authService: AuthService,
  ) {}
  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findById(id);
  } //

  @Query(returns => [User])
  async users_all() {
    return this.usersService.findAll();
  }

  @Query(returns => User) //RECENTLY CHANGED TO PASS ACCESS_TOKEN
  async isEmail(@Args('email') email: string) {
    let user = await this.usersService.isEmail(email);
    let { access_token } = await this.authService.login(user);
    user.firstName = access_token;
    return user;
  }

  @Query(returns => User)
  async getTypesOfDocuments(@Args('id') id: number) {
    return this.usersService.getTypesOfDocuments(id);
  }

  //????????????????????????????????????????
  @Query(returns => User)
  async testObject2(@Args('user') user: UserInput) {
    return this.usersService.testObject(user);
  }

  @Mutation(returns => User)
  async register(
    @Args('username') username: string,
    @Args('password') password: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('previousLastName') previousLastName: string,
    //@Args('birthYear') birthYear: number,
    @Args('gender') gender: string,
    //@Args('idNumber') idNumber: number,
  ) {
    let service = await this.usersService.register(
      username,
      password,
      firstName,
      lastName,
      previousLastName,
      //birthYear,
      gender,
      //idNumber,
    );
    return service;
  }

  @Mutation(returns => User)
  async register2(
    @Args('idNumber') idNumber: string,
    @Args('gender') gender: string,
    @Args('birthYear') birthYear: number,
    @Args('previousLastName') previousLastName: string,
    @Args('lastName') lastName: string,
    @Args('firstName') firstName: string,
    @Args('password') password: string,
    @Args('username') username: string,
  ) {
    let service = await this.usersService.register2(
      username,
      password,
      firstName,
      lastName,
      previousLastName,
      birthYear,
      gender,
      idNumber,
    );
    return service;
  }

  //   @Query(returns => User)
  //   async login(
  //     @Args('username', { type: () => String }) username: string,
  //     @Args('password', { type: () => String }) password: string,
  //     @Context() context, //: GraphQLExecutionContext,
  //   ) {
  //     console.log(1);
  //     console.log(username); //log //
  //     console.log(password); //log//
  //     let user = await this.usersService.fetchUser_unPw(username, password);
  //     let { access_token } = await this.authService.login(user);
  //     user.firstName = access_token;
  //     return user;
  //   }

  @UseGuards(JwtAuthGuard)
  @Query(returns => Boolean)
  async verifyToken() {
    return true;
  }

  @ResolveField()
  async documentTypes(@Parent() user: User) {
    return this.usersService.findAllProductTypes(user.id);
  }
}
