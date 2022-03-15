import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'get brands';
  }

  @Get('filter')
  getFilterBrand() {
    return 'I´m a filter brands';
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return `bandID ${id}`;
  }

  @Get()
  getFilterBrands(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `limit ${limit} offset${offset}`;
  }
}
