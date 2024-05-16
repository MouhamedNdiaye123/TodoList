import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodoTitle = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  todos = this.todoService.getTodos();

  toggleTodoCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
