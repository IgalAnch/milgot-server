import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service'; // import { AuthMiddleware } from './auth.middleware';
import { UsersResolver } from './users.resolver';
import { User } from './user.entity';

//import { UsersController } from './users.controller'; //test rmve ltr

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],

  controllers: [], //test remove later
})
export class UsersModule {}
