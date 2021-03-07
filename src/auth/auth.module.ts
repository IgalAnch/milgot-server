import { Module, forwardRef } from '@nestjs/common'; //nest
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; // -custom-
import { PassportModule } from '@nestjs/passport'; //nest
import { JwtModule } from '@nestjs/jwt'; //nest
import { jwtConstants } from './constant'; //config
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { jwtOptions } from './jwt-options';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register(jwtOptions),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy], //added jst strategy yesterday****
  exports: [AuthService],
})
export class AuthModule {}
