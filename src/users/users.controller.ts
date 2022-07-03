import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseInterceptors,
} from '@nestjs/common'
import { User } from 'src/models/user'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.userService.getUsers()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:userName')
  getByUserName(@Param('userName') userName: string) {
    const user = this.userService.getUserByUserName(userName)

    if (user) {
      return new User(user)
    } else {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    }
  }
}
