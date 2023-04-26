import { Person } from 'src/domain/entities/person.entity';

export class CreatePersonDTO extends Person {
  name: string;
  lastName: string;
}
