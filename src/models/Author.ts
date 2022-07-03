import { IsOptional, IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator'

export class Author {
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
