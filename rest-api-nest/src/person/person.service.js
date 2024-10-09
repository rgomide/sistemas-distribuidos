import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Person } from './person.entity';

@Injectable()
@Dependencies(getRepositoryToken(Person))
export class PersonService {
  constructor(personRepository) {
    this.personRepository = personRepository;
  }

  create(person) {
    return this.personRepository.insert(person);
  }

  findAll() {
    return this.personRepository.find();
  }

  findOne(id) {
    return this.personRepository.findOne({ where: { id } });
  }

  delete(id) {
    return this.personRepository.delete({ id });
  }

  update(id, person) {
    return this.personRepository.update(id, person);
  }
}
