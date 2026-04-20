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

  getByIndex(index: number): Person | undefined {
    return this.persons[index];
  }

  add(person: Person): void {
    this.persons.push(person);
  }

  update(index: number, person: Person): void {
    this.persons[index] = person;
  }

  delete(index: number): void {
    this.persons.splice(index, 1);
  }

}
