import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestuComponent } from './add-restu/add-restu.component';
import { ListRestuComponent } from './list-restu/list-restu.component';
import { UpdateRestuComponent } from './update-restu/update-restu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddRestuComponent
  },
  {
    path: 'update/:id',
    component: UpdateRestuComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: ListRestuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
