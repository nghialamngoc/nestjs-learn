import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Author, AuthorSchema } from 'src/schema/author.schema'
import { AuthorController } from './author.controller'
import { AuthorService } from './author.service'
import { ValidateAuthorMiddleware } from './validate-author.middleware'
import { ValidateJwtMiddleware } from './validate-jwt.middleware'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateAuthorMiddleware, ValidateJwtMiddleware)
      .forRoutes('*')

    // Apply middleware for specific routes
    // consumer.apply(ValidateAuthorMiddleware).exclude({
    //   path: '',
    //   method: RequestMethod.GET
    // }).forRoutes({
    //   path: 'author/:id',
    //   method: RequestMethod.GET,
    // })
  }
}
