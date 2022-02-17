import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class BuyElecDto {
  @IsNotEmpty({ message: 'meter id must be provided' })
  @IsString({ message: 'meter id must be a string' })
  meter: string;

  @IsNotEmpty({ message: 'ammount must be provided' })
  @IsInt({ message: 'ammount must be a number' })
  ammount: number;
}
