import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common'; //nest
import { AuthGuard } from '@nestjs/passport'; //nest

import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

//good practice
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

// console.log(context);
// console.log(ctx.getContext().req);
// console.log(ctx);
// console.log(ctx.getContext().req.body.variables);
// console.log(ctx.getContext().req);
