import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() userData: Partial<User>) {
        return this.userService.create(userData);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }
}
