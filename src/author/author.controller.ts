import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { Author } from 'src/models/Author'
import { AuthorService } from './author.service'

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('')
  getAllAuthor() {
    return this.authorService.getAllAuthor()
  }

  @Get(':id')
  getAuthor(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params

    const result = this.authorService.getAuthor(id)

    if (!result) {
      return res.status(400).json({
        msg: 'Author not found',
      })
    }

    return res.status(200).json(result)
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createAuthor(@Body() body: Author) {
    return this.authorService.createAuthor(body)
  }
}
