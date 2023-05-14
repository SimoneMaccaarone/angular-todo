import { Component } from '@angular/core';
import { Todo } from '../model'
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent {
todo : Todo ={
  id: 1,
  name:'Buy a new PC',
  isComplete: true
};

}
