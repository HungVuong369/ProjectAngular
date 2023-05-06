import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsTeachersComponent } from './students-teachers/students-teachers.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './students-teachers/add/add.component';
import { UpdateComponent } from './students-teachers/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import {ToastrModule} from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import {MaterialComponent} from './material/material.component';
import { FormAddUpdateComponent } from './students-teachers/form-add-update/form-add-update.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentsTeachersComponent,
    HeaderComponent,
    AddComponent,
    UpdateComponent,
    AuthComponent,
    MaterialComponent,
    FormAddUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot( {
        timeOut:3500,
        preventDuplicates:true,
        easing: 'ease-in',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }