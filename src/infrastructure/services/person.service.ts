import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Person, PersonRepository } from '../database';

@Injectable()
export class PersonService {
  private personRepository: PersonRepository;

  constructor(
    @InjectRepository(Person)
    private readonly personRepo: Repository<Person>,
  ) {
    this.personRepository = new PersonRepository(personRepo);
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.findAll();
  }

  async findById(id: string): Promise<Person> {
    return this.personRepository.findById(id);
  }

  async create(person: Person): Promise<Person> {
    return this.personRepository.create(person);
  }

  async update(id: string, person: Person): Promise<Person> {
    return this.personRepository.update(id, person);
  }

  async delete(id: string): Promise<boolean> {
    return this.personRepository.delete(id);
  }
}
