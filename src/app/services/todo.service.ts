import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './../models/Todo';

const httpOptions = {
 headers: new HttpHeaders({
   'content-type' : "appliaction/json"
 })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit: string = '?_limit=10';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
  }

  SetCompletedStatus(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}`;
    return this.http.post<Todo>(url, todo, httpOptions);
  }
}
