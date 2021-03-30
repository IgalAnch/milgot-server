import { UserRoles } from './user-roles.entity';
import { UserRolesService } from './user-roles.service';
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

@Resolver(UserRoles)
export class UserRolesResolver {
  constructor(private userRolesService: UserRolesService) {}
}
