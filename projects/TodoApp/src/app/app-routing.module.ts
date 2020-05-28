import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'todo/:todoIndex', component: TodoDetailsComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }