import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
