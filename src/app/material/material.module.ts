import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  exports:[
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  declarations: [
  ],
  imports: [
    CommonModule,
  ]
})
export class MaterialModule { }
