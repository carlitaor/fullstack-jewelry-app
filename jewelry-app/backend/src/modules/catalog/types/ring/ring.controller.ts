import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RingService } from './ring.service';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';

@Controller('ring')
export class RingController {
  constructor(private readonly ringService: RingService) {}

  @Post()
  create(@Body() createRingDto: CreateRingDto) {
    return this.ringService.create(createRingDto);
  }

  @Get()
  findAll() {
    return this.ringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRingDto: UpdateRingDto) {
    return this.ringService.update(+id, updateRingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ringService.remove(+id);
  }
}
