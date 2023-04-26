import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { useCase } from './application/use-case';
import { PersonService } from './domain/services/person.service';
import { Person, PersonRepository } from './infrastructure/database';
import { PersonService as PersonServiceDB } from './infrastructure/services/person.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [{ provide: 'PersonService', useClass: PersonService }],
  exports: [TypeOrmModule],
})

export class ShareModule {}
