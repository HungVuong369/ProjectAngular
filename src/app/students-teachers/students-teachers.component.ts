import { Component, ViewChild } from '@angular/core';
import { PersonService } from './Service/person.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ToastrNotifierService } from '../Notifier/toastr-notifier.service';

@Component({
  selector: 'app-students-teachers',
  templateUrl: './students-teachers.component.html',
  styleUrls: ['./students-teachers.component.scss'],
})

export class StudentsTeachersComponent {
  deleteMultiple: boolean = false;
  displayedColumns: string[] = ['select', 'name', 'address', 'phone', 'action'];
  pageSize = 5;
  length = this.people.length;
  itemsView: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get people(): any[] {
    if (this.personService.filter == 'student')
      return this.personService.peopleData.filter(item => item.role.startsWith('student'));

    else if (this.personService.filter == 'teacher')
      return this.personService.peopleData.filter(item => item.role.startsWith('teacher'));

    return this.personService.peopleData;
  }

  ngOnInit() {
    this.itemsView = this.people.slice(0, this.pageSize);
  }

  constructor(private router: Router, public personService: PersonService, private notifier: ToastrNotifierService) { }

  getView() {
    this.itemsView = this.people.slice(0, this.pageSize);
    this.length = this.people.length;
    this.paginator.firstPage;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = this.pageSize;
  }

  Add(): void {
    this.router.navigate(['/list/add']);
  }

  Update(item: any): void {
    this.router.navigate(['/list/update', item.name, item.address, item.phone]);
  }

  Delete(item: any): void {
    this.personService.Delete(item, this.itemsView);
    this.getView();
    this.notifier.showSuccess('XÓA THÀNH CÔNG!', '');
  }

  DeleteSelected(): void {
    this.personService.DeleteSelected();
    if (this.deleteMultiple == true)
      this.deleteMultiple = false;
    this.getView();
  }

  SelectAll() {
    this.personService.peopleData.forEach(item => {
      if (this.deleteMultiple == item.checked && item.role == this.personService.filter)
        item.checked = !this.deleteMultiple;
    });
    this.deleteMultiple = !this.deleteMultiple;
  }

  ResetSelect() {
    this.personService.peopleData.forEach(item => {
      if (item.checked == true && item.role == this.personService.filter)
        item.checked = false;
    });
    this.deleteMultiple = false;
  }

  EnableMultiple() {
    const length = this.people.filter(item => item.checked == true).length;

    if (length == this.people.length)
      this.deleteMultiple = true;

    else
      this.deleteMultiple = false;
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.itemsView = this.people.slice(startIndex, endIndex);
  }
}