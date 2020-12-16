import { IsString, IsEmail, IsDate, IsNumber } from 'kiwi-server';
import { Log } from '../datastore/entities'; 

export class LogIn{
  @IsString() message: string;
  @IsString() level: string;
  @IsString() type: string;
  @IsDate() date: Date;
  @IsString() project: string;
  exception: Exception;
  @IsString() info: any;
}

export class Exception{
    @IsNumber() code: number;
    @IsString() message: string;
    @IsString() stack: string;
}

export class LogListIn{
  @IsNumber() page: string;
  @IsNumber() size: string;
  @IsString() text: string;
  @IsString() level: string;
}

export class LogListOut{
  items: Array<Log>;
  total: number;
}