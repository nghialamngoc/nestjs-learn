import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Author {
  @Prop({ required: false})
  name: string

  @Prop({ required: false})
  age: string
}

export type AuthorDocument = Author & Document;
export const AuthorSchema = SchemaFactory.createForClass(Author)
