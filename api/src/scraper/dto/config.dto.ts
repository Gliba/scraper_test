import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class Config {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsString()
  parent_selector: string;

  @IsNotEmpty()
  @IsString()
  item_selector: string;
}
