import {
  Controller,
  Param,
  Get,
  Delete,
  Put,
  Body,
  Post,
} from '@nestjs/common';

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

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'action create',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  destroy(@Param('id') id: number) {
    return id;
  }
}
