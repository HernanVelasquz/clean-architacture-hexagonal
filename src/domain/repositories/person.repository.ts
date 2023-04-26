import { Person } from '../entities/person.entity';

export interface PersonRepositoy {
  findAll(): Promise<Person[]>;
  findById(id: string): Promise<Person>;
  create(person: Person): Promise<Person>;
  update(id: string, person: Person): Promise<Person>;
  delete(id: string): Promise<boolean>;
}
