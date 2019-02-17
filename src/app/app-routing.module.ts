import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from '../app/components/todo/todo.component';
import { AboutComponent } from '../app/components/about/about.component';

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
