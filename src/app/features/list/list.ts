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
    this.loadPersons();    
    this.message = window.history.state?.message || null;
  }

  loadPersons(): void {
    this.persons = this.personService.getAll();
  }

  deletePerson(index: number): void {
    const confirmDelete = confirm('Deseja realmente excluir este registro?');

    if (!confirmDelete) {
      return;
    }

    this.personService.delete(index);
    this.loadPersons();
    this.message = 'Registro excluído com sucesso!';
  }

}
