import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  getTodos() {
    return this.todosSubject.asObservable();
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
    this.todosSubject.next(this.todos);
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todosSubject.next(this.todos);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.todosSubject.next(this.todos);
  }
}
