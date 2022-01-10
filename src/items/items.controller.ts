import { Controller, Get, Post, Put, Delete, Patch, Body, Param} from '@nestjs/common';

import { createItemDto } from './dto/create-item.dto'; 

@Controller('items')
export class ItemsController {
  @Get() 
  findAll(): string {
    return "Heeloo worldd"
  }
  @Get(`:id`) 
  findOne(@Param() param): string{
    return `Item ${param.id}`
  }
  @Post()
  create(@Body() createItemDto: createItemDto): object{
    return {
      name: createItemDto.name,
      description: createItemDto.description,
      qty: createItemDto.qty
    }
  }

  @Put(`:id`)
  update(@Body() updateItemDto: createItemDto,@Param() param): object {
    return {
      message: `Item Update: ${param.id}`,
      name: updateItemDto.name,
      description: updateItemDto.description,
      qty: updateItemDto.qty,

    }
  }

  @Delete(`:id`)
  delete(@Param() param): string{
    return `item deleted ${param.id}`
  }
}
