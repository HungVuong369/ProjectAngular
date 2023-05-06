import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTeachersComponent } from './students-teachers/students-teachers.component';
import { AddComponent } from './students-teachers/add/add.component';
import { UpdateComponent } from './students-teachers/update/update.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'list', component: StudentsTeachersComponent },
  { path: 'list/add', component: AddComponent },
  { path: 'list/update/:name/:address/:phone', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
