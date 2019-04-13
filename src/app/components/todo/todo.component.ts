import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../structures/todo.structure'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('info') todo: Todo = {
    userId: 0,
    completed: false,
    id: 0,
    title: ''
  }

  constructor() { }

  ngOnInit() {
  }

}