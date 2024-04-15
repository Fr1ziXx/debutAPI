import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLucasDto } from 'src/dtos/userLucas.dto';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService){}
    @UsePipes(ValidationPipe)
    @HttpCode(201)
    @Get('test/:id')
    test(
        @Body() user:UserLucasDto,
        @Param("id") numero:number){
        const envLucas = this.userService.testLucas()
        return `Compte de ${user.username} : ${numero} , ${user.password}, ${envLucas}`;
    }

    @UsePipes(ValidationPipe)
    @Post("register")
    creationCompte(
        @Body() user:UserLucasDto
    ){
        return this.userService.postCompte(user);
    }

    @UsePipes(ValidationPipe)
    @Get(':id')
    getUser(
        @Param("id") id:number
    ){
        return this.userService.getById(id);
    }

    
    @UsePipes(ValidationPipe)
    @Get("username")
    getId(
        @Param("username") user:string
    ){
        return this.userService.getByUsername(user);
    }
}
