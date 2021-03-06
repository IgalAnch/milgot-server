import { Injectable, ExecutionContext } from '@nestjs/common'; //nest
import { AuthGuard } from '@nestjs/passport'; //nest

import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    console.log('const ctx = GqlExecutionContext.create(context);');
    console.log(ctx);
    return ctx.getContext().req;
  }
}
