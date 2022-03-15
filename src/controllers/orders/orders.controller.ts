import { Controller, Get, Param } from '@nestjs/common';

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
}
