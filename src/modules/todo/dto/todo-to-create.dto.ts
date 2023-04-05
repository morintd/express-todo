import { IsString } from 'class-validator';

export class TodoToCreateDTO {
  @IsString()
  title!: string;

  @IsString()
  content!: string;
}
