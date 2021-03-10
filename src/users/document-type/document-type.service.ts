import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
// import { validate } from 'class-validator';
import { forwardRef, Inject } from '@nestjs/common'; //CardService
import { DocumentType } from './document-type.entity';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
//import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';

import * as bcrypt from 'bcrypt'; //FIND USE FOR THIS OR?
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectRepository(DocumentType) //experimental repository
    private readonly documentTypeRepository: Repository<DocumentType>,
    @Inject(forwardRef(() => AuthService)) public authService: AuthService,
  ) {}

  async addProductType() {
    let docType = new DocumentType();
    docType.text = 'abc';
    docType.value = 'yes';
    docType.user.id = 29;
    await this.documentTypeRepository.insert(docType);
  }
}
