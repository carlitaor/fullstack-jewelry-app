import { PartialType } from '@nestjs/mapped-types';
import { CreatePendantDto } from './create-pendant.dto';

export class UpdatePendantDto extends PartialType(CreatePendantDto) {}
