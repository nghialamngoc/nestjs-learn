import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  Res,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { AuthorDto } from 'src/dto/author.dto'
import { HttpExceptionFilter } from 'src/exeptions/filter'
import { AuthorService } from './author.service'

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('')
  getAllAuthor() {
    return this.authorService.getAllAuthor()
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  async getAuthor(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid Id', 400)
    }

    const result = await this.authorService.getAuthor(id)

    console.log('result', result)

    if (!result) {
      throw new HttpException('Author not found', 400)
    }

    return res.status(200).json(result)
  }

  @Post('create')
  // validate
  @UsePipes(ValidationPipe)
  createAuthor(@Body() body: AuthorDto) {
    return this.authorService.createAuthor(body)
  }
}
