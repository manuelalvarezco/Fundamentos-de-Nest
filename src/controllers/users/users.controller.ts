import { Controller, Param, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'get Orders';
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `userID ${id}`;
  }
}
