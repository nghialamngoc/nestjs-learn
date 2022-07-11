import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { AuthorDto } from 'src/dto/author.dto'
import { Author } from 'src/schema/author.schema'
import { Model } from 'mongoose'
@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private readonly authorModule: Model<Author>
  ) {}

  authors: AuthorDto[] = [
    {
      id: '628f533a0568d769ab021ac8',
      name: 'Ngo Tat To',
      age: 127,
    },
    {
      id: '628f54920568d769ab021acc',
      name: 'Nam Cao',
      age: 106,
    },
    {
      id: '628f549b0568d769ab021ace',
      name: 'Vu Trong Phung',
      age: 109,
    },
  ]

  getAllAuthor() {
    return this.authorModule.find()
  }

  async getAuthor(id: string) {
    return await this.authorModule.findById(id)
  }

  async createAuthor(author: AuthorDto) {
    const newAuthor = new this.authorModule(author)

    return await newAuthor.save()
  }
}
