import {
  Controller,
  Delete,
  Param,
  Put,
  Body,
  Post,
  Get,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return {
      message: 'get customers',
    };
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
