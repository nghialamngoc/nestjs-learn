import { Module } from '@nestjs/common'
import { AuthorModule } from './author/author.module'
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthorModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
