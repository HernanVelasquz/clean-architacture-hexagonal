import { Injectable } from '@nestjs/common';

import { PersonDTO } from 'src/application/dto';
import { Person } from 'src/domain/entities/person.entity';
import { IUseCase } from '../interfaces/IUseCase.interface';
import { PersonRepositoy } from 'src/domain/repositories/person.repository';

@Injectable()
export class UpdatePersonUseCase implements IUseCase {
  constructor(private readonly personRepository: PersonRepositoy) {}
  execute(id: string, updatePerson: PersonDTO): Promise<Person> {
    return this.personRepository.update(id, updatePerson);
  }
}
