import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLucasDto } from 'src/dtos/userLucas.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,
){}
    
    testLucas(){
        return process.env.TEST_LUCAS;
    }

    postCompte(user:UserLucasDto){
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser)
    }
    getById(id:number)
    {
        return this.userRepository.findOneBy({id});
    }
    getByUsername(username:string)
    {
        return this.userRepository.findOneBy({username})
    }
}
