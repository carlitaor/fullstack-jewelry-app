import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendantService } from './pendant.service';
import { CreatePendantDto } from './dto/create-pendant.dto';
import { UpdatePendantDto } from './dto/update-pendant.dto';

@Controller('pendant')
export class PendantController {
  constructor(private readonly pendantService: PendantService) {}

  @Post()
  create(@Body() createPendantDto: CreatePendantDto) {
    return this.pendantService.create(createPendantDto);
  }

  @Get()
  findAll() {
    return this.pendantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePendantDto: UpdatePendantDto) {
    return this.pendantService.update(+id, updatePendantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendantService.remove(+id);
  }
}
