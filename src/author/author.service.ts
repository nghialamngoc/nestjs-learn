import { Injectable } from '@nestjs/common'
import { Author } from 'src/models/Author'

@Injectable()
export class AuthorService {
  authors : Author[] = [
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
    return this.authors
  }

  getAuthor(id: string) {
    return this.authors.find((x) => x.id === id)
  }

  createAuthor(author: Author) {
    this.authors.push(author)

    return this.authors
  }
}
