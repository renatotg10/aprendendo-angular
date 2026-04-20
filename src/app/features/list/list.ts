import { Component } from '@angular/core';
import { PersonService } from '../../services/person';
import { Person } from '../../models/person';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListComponent {

  persons: Person[] = [];
    message: string | null = null;

  constructor(private personService: PersonService) {
    this.persons = this.personService.getAll();
    this.message = window.history.state?.message || null;
  }

}
