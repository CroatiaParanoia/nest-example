import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserGander } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  userName: string;

  email: string;

  gander: UserGander;

  age: number;
}
