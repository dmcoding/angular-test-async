import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Todo} from '../structures/todo.structure'

@Injectable()
export class TodoService {

  private url: string = 'https://jsonplaceholder.typicode.com/todos/';
  private todoSubject: Subject<any> = new Subject<any>();
  public todo$: Observable<any> = this.todoSubject.asObservable();

  constructor(private http: HttpClient) { }

  getList() {
    this.http.get(this.url).subscribe(this.todoSubject);
  } 

}