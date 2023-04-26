import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Person } from '../entities/person.entity';

export class PersonRepository {
  constructor(private readonly repository: Repository<Person>) {}

  async findAll(): Promise<Person[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Person> {
    return await this.repository.findOneBy({ id });
  }

  async create(person: Person): Promise<Person> {
    return await this.repository.save(person);
  }

  async update(id: string, person: Person): Promise<Person> {
    const personDb = await this.findById(id);
    return await this.repository.save({ ...personDb, ...person });
  }

  async delete(id: string): Promise<boolean> {
    const personDb = await this.findById(id);
    if (personDb) {
      await this.repository.delete(id);
      return true;
    }
    return false;
  }
}
