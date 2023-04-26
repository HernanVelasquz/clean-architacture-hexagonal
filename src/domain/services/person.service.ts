import { Injectable } from '@nestjs/common';
import { PersonRepositoy } from '../repositories/person.repository';
import { Person } from '../entities/person.entity';

@Injectable()
export class PersonService {
  constructor(private personRepoitory: PersonRepositoy) {}

  async findAll(): Promise<Person[]> {
    return this.personRepoitory.findAll();
  }
  async findById(id: string): Promise<Person> {
    return this.personRepoitory.findById(id);
  }
  async create(person: Person): Promise<Person> {
    person.registerDate = new Date();
    return this.personRepoitory.create(person);
  }
  async update(id: string, person: Person): Promise<Person> {
    return this.personRepoitory.update(id, person);
  }
  async delete(id: string): Promise<boolean> {
    return this.personRepoitory.delete(id);
  }
}
