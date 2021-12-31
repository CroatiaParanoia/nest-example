import { UserGander } from '../entities/user.entity';

export class CreateUserDto {
  userName: string;

  email: string;

  gander: UserGander;

  age: number;
}
