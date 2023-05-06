import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddUpdateComponent } from './form-add-update.component';

describe('FormAddUpdateComponent', () => {
  let component: FormAddUpdateComponent;
  let fixture: ComponentFixture<FormAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
