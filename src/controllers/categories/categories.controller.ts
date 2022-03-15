import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {


  @Get()
  getCategories(){
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
  getCategory(@Param('id') id: string){
    return `CategoryID ${id}`;
  }
}
