import { Injectable } from '@nestjs/common';

import { Person } from 'src/domain/entities/person.entity';
import { PersonService } from 'src/domain/services/person.service';
import { IUseCase } from '../interfaces';

@Injectable()
export class GetAllProductsUseCase implements IUseCase {
  constructor(private readonly personService: PersonService) {}
  execute(): Promise<Person[]> {
    return this.personService.findAll();
  }
}
