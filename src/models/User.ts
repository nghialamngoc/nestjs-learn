import { Exclude } from 'class-transformer'

export class User {
  userName: string

  @Exclude()
  password: string

  constructor(patial: Partial<User>) {
    Object.assign(this, patial)
  }
}
