import { Injectable } from '@nestjs/common';
import { CreatePendantDto } from './dto/create-pendant.dto';
import { UpdatePendantDto } from './dto/update-pendant.dto';

@Injectable()
export class PendantService {
  create(createPendantDto: CreatePendantDto) {
    return 'This action adds a new pendant';
  }

  findAll() {
    return `This action returns all pendant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendant`;
  }

  update(id: number, updatePendantDto: UpdatePendantDto) {
    return `This action updates a #${id} pendant`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendant`;
  }
}
