import {
  Injectable,
  NestMiddleware
} from '@nestjs/common'
import { NextFunction, Request } from 'express'

@Injectable()
export class ValidateAuthorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Validate Author Middleware')

    return next()
  }
}
