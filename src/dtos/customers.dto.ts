import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
