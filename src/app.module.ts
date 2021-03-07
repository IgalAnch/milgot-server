import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TYPEORM_CONFIG } from './typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      context: ({ req, res }) => ({ req, res }), //band-aid?
      cors: {
        origin: [
          'http://localhost:4200',
          '127.0.0.1:4200',
          process.env.PORT,
          'http://localhost:4243',
          '127.0.0.1:4243',
          'http://localhost:4242',
          '127.0.0.1:4242',
        ],
        credentials: true,
        //max_age: 50000,
      },
    }),
    TypeOrmModule.forRoot(TYPEORM_CONFIG),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
