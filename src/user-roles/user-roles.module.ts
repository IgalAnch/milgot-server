import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesService } from './user-roles.service'; // import { AuthMiddleware } from './auth.middleware';
//import { UserRolesResolver } from './user-roles.resolver';
import { UserRoles } from './user-roles.entity';

//import { UsersController } from './users.controller'; //test rmve ltr

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRoles]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserRolesService], //, UserRolesResolver],
  exports: [UserRolesService],

  controllers: [], //test remove later
})
export class UserRolesModule {}
