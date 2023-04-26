import { Injectable } from '@nestjs/common';

import { CreatePersonDTO } from 'src/application/dto';
import { PersonService } from 'src/domain/services/person.service';
import { IUseCase } from '../interfaces';
import { Person } from 'src/domain/entities/person.entity';

@Injectable()
export class CreatePersonUseCase implements IUseCase {
  constructor(private readonly personService: PersonService) {}

  execute(createPerson: CreatePersonDTO) {
    const person = new Person();
    person.name = createPerson.name;
    person.lastName = createPerson.lastName;
    person.registerDate = new Date();
    return this.personService.create(person);
  }
}
