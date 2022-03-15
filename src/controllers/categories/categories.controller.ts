import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Post,
  Body,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return 'Get categories';
  }

  @Get(':id/products/:productId')
  getProductCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `product ${productId} and ${id}`;
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return `CategoryID ${id}`;
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
