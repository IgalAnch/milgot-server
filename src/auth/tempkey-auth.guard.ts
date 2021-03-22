import { Injectable, ExecutionContext } from '@nestjs/common'; //nest
import { AuthGuard } from '@nestjs/passport'; //nest

import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class TempkeyAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
