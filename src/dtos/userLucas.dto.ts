import { IsNumber, IsString } from "class-validator";

export class UserLucasDto{
    @IsNumber()
    id:number
    @IsString()
    username:string;
    @IsString()
    password:string;
}