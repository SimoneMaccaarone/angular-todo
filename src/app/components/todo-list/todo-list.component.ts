import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  // @Input() todoArray?: Todo[] = [];      //default, questa proprieta puo essere riempita tramite l' HTML (input)

  _todoArray: Todo[] = [];

  @Input() set todoArray(value: Todo[]){
    this._todoArray= value;
    this._todoArray.sort((todo1,todo2)=> todo2.priority - todo1.priority)
  }

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancellare',todoToDelete.title);
    this.todoArray= this._todoArray?.filter(t => t.title !== todoToDelete.title); // La Filter() dice cosa tenere; tieni tutti i todo che sono diversi dal TODO.title che è arrivato
  }

}
