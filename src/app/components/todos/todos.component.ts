import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public service: TodoService) { }

  ngOnInit() {
    this.service.getList().subscribe(console.info, console.error)
  }

}