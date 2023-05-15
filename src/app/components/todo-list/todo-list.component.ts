import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todoArray?: Todo[] = [];      //default, questa proprieta puo essere riempita tramite l' HTML (input)

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancellare',todoToDelete.title);
    this.todoArray= this.todoArray?.filter(t => t.title !== todoToDelete.title); // La Filter() dice cosa tenere; tieni tutti i todo che sono diversi dal TODO.title che è arrivato
  }

}
