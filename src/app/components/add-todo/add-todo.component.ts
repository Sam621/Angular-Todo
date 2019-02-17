import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  completed: boolean;


  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    const todo = {
      titile : this.title,
      completed : this.completed
    };

    this.addTodo.emit(todo);
    this.title = '';
    this.completed = false;
  }
}
