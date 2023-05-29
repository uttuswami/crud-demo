import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './tasks.entity';
import { UsersService } from './tasks.service';

@Crud({
    model: { 
        type: User
}
})
@Controller('Tasks')
export class UsersController implements CrudController<User> {
   constructor(public service: UsersService) {}
}
