import {
  Controller,
  Dependencies,
  Get,
  Bind,
  Delete,
  Body,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('people')
@Dependencies(PersonService)
export class PersonController {
  constructor(personService) {
    this.personService = personService;
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  @Bind(Param('id'))
  findOne(id) {
    return this.personService.findOne(id);
  }

  @Post()
  @Bind(Body())
  async create(personDto) {
    return this.personService.create(personDto);
  }
  @Put(':id')
  @Bind(Param('id'), Body())
  async update(id, personDto) {
    return this.personService.update(id, personDto);
  }

  @Delete(':id')
  @Bind(Param('id'))
  remove(id) {
    return this.personService.delete(id);
  }
}
