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
import { DocumentType } from './document-type.entity'; //Entity+Model
import { DocumentTypeService } from './document-type.service';

import { PubSub } from 'graphql-subscriptions';
import { Res, UseGuards, All } from '@nestjs/common';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { AuthService } from '../../auth/auth.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AppController } from '../../app.controller';

const pubSub = new PubSub();

@Resolver(DocumentType)
export class DocumentTypeResolver {
  constructor(
    private documentTypeService: DocumentTypeService,
    public authService: AuthService,
  ) {}
}
