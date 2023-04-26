import { Injectable } from '@nestjs/common';
import { IUseCase } from '../interfaces';
import { PersonService } from 'src/domain/services/person.service';

@Injectable()
export class DeletePersonUseCase implements IUseCase {
  constructor(private readonly personService: PersonService) {}
  execute(id: string): Promise<boolean> {
    return this.personService.delete(id);
  }
}
