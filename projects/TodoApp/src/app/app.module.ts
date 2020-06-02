import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { ButtonComponent } from './todos/add-todo/button/button.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { TotalItemsComponent } from './total-items/total-items.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ChangeContentDirective } from './directives/change-content.directive';
import { FancyQuotePipe } from './pipes/fancy-quote.pipe';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    AddTodoComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemComponent,
    TotalItemsComponent,
    TestCompComponent,
    ChangeContentDirective,
    FancyQuotePipe,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    TodoDetailsComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
