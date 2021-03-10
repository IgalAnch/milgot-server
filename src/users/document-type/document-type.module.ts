import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentTypeService } from './document-type.service'; // import { AuthMiddleware } from './auth.middleware';
import { DocumentTypeResolver } from './document-type.resolver';
import { DocumentType } from './document-type.entity';

//import { UsersController } from './users.controller'; //test rmve ltr

import { AuthModule } from '../../auth/auth.module';
import { AuthService } from '../../auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentType]),
    forwardRef(() => AuthModule),
  ],
  providers: [DocumentTypeService, DocumentTypeResolver],
  exports: [DocumentTypeService],

  controllers: [], //test remove later
})
export class DocumentTypeModule {}
