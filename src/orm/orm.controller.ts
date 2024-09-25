import { Controller, Get, Post, Body, } from '@nestjs/common';
import { OrmService } from './orm.service';
import { CreateOrmDto } from './dto/create-orm.dto';

@Controller('orm')
export class OrmController {
  constructor(private readonly ormService: OrmService) {}

  @Post()
  create(@Body() createOrmDto: CreateOrmDto) {
    return this.ormService.create(createOrmDto);
  }
}
