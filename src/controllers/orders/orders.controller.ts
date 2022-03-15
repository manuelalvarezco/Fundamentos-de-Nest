import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Body,
  Post,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return 'get Orders';
  }

  @Get(':id')
  getOrder(@Param(':id') id: string) {
    return `OrderID ${id}`;
  }

  @Get(':id/products')
  getProductsByOrder(@Param('id') id: string) {
    return `products in order ${id}`;
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
