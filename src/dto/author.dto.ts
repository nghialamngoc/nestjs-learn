import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator'

export class AuthorDto {
  @IsOptional()
  @IsString()
  id: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @Min(18)
  @Max(60)
  age: number
}
