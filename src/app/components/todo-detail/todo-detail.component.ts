import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

    @Input() todoDetail?: Todo;  //DETAGLIO
    @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter() //DELETE

    deleteTodo(){
      this.todoDeleted.emit(this.todoDetail);
    }
}
