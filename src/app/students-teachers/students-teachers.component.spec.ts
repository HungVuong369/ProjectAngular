import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTeachersComponent } from './students-teachers.component';

describe('StudentsTeachersComponent', () => {
  let component: StudentsTeachersComponent;
  let fixture: ComponentFixture<StudentsTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
