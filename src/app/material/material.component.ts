import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  @Input() dataSource!: any[];
  @Input() columns!: any[];
  @Input() displayedColumns!: string[];
  data: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSize = 5;
  length = 0;

  constructor() { }

  ngOnInit(): void {
    this.length = this.dataSource.length;
    this.data = this.dataSource.slice(0, this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.data = this.dataSource.slice(startIndex, endIndex);
  }
}
