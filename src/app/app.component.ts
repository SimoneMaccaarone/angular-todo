import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COSE DA FARE :)';

  todos : Todo[] = [
    {
      title: 'Regalo alla Nonna',
      description: 'compra il profumo che le piace tanto',
      priority: 2
    },
    {
      title: 'Compra il pane',
      priority: 1
    },
    {
      title: 'Cucinare la Coca',
      description: 'beh che dire...',
      priority: 3
    },
    {
      title:'Mangiare i sassi',
      priority:1
    }
  ]

  // function AddTodo
  addTodo(newTodo:Todo){
    this.todos.push(newTodo);
  }

}
