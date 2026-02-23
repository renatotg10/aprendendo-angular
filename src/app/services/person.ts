import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  
  private persons: Person[] = [];

  getAll(): Person[] {
    return this.persons;
  }

  add(person: Person): void {
    this.persons.push(person);
  }

}
