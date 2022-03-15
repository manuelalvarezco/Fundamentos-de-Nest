import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit => ${limit} offset=> ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return 'I´m a filter';
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return `productID  ${id}`;
  }

  @Post()
  create() {
    return {
      message: 'action create',
    };
  }
}
