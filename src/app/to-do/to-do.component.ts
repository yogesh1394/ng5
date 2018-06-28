import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import {Todo} from './to-do';
import { ToDoService } from './to-do.service';


export enum SaveMode {
  None,
  New,
  Edit
}


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  formGroup: FormGroup;
  todos: any;
  saveMode: any;
  headerText: any;

  constructor(private _todoService: ToDoService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': '',
      'due': '',
      'done': '',
      'notes': ''});
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this._todoService.getTodosFromData();
  }

  saveTodo(todo: Todo) {
    if (todo.id) {
      this._todoService.updateTodo(todo);
    } else {
      this._todoService.addTodo(todo);
    }
    this.saveMode = SaveMode.None;
  }

  removeToDo(todo: Todo) {
    this._todoService.deleteTodo(todo);
  }

  cancelEditTodo() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(todo: Todo) {
    if (!todo) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit To-Do';
    const editedTodo = Object.assign({}, todo, { due: this.applyLocale(todo.due) });
    this.formGroup.setValue(editedTodo);
  }
  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'New To-Do';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }


}
