import { Controller, Get, Param, Query, Post, Body, Put, Delete } from '@nestjs/common';

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
