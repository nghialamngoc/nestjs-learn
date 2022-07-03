import { Injectable } from '@nestjs/common'
import { User } from 'src/models/user'

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userName: 'nghia.lam',
      password: 'Padmin12@',
    },
  ]

  getUsers() {
    return this.users.map((x) => new User(x))
  }

  getUserByUserName(userName: string) {
    return this.users.find((x) => x.userName === userName)
  }
}
