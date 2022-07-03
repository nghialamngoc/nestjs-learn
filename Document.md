## Controller:

Controllers chịu trách nhiệm xử lý các request đến và response lại client.
Giống như các framework khác mỗi controller đảm nhận xử lý các request đến 1 router.

```bash
$ nest g controller author
$ nest g controller author/controllers/author
```

## Provider

Provider là một khái niệm cơ bản trong Nest.
Có rất nhiều class cơ bản của Nest có thể coi là 1 provider như: services, repositories. factories, helpers...
Idea của provider là có thể inject dependencies - điều này có nghĩa là các object có thể tạo ra các quan hệ với nhau,
và việc tạo các instance của các object được Nest thực hiện tự động.
Một provider đơn giản là 1 class được liên kết với 1 decorator @Injectable().
@Injectable() decorator sẽ giúp Nest biết rằng đây là 1 provider

```bash
$ nest g service author/services/author
```

## Serialization

Serialization is a process that happens before objects are returned in a network response. This is an appropriate place to provide rules for transforming and sanitizing the data to be returned to the client. For example, sensitive data like passwords should always be excluded from the response. Or, certain properties might require additional transformation, such as sending only a subset of properties of an entity. Performing these transformations manually can be tedious and error prone, and can leave you uncertain that all cases have been covered.

<code>
  import { Exclude } from 'class-transformer';

  export class UserEntity {
    id: number;
    firstName: string;
    lastName: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findOne(): UserEntity {
    return new UserEntity({
      id: 1,
      firstName: 'Kamil',
      lastName: 'Mysliwiec',
      password: 'password',
    });
  }
</code>