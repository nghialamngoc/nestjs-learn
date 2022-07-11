import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request } from 'express'

@Injectable()
export class ValidateJwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Validate JWT Middleware')
    next()
  }
}
