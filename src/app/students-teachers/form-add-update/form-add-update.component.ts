import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-update',
  templateUrl: './form-add-update.component.html',
  styleUrls: ['./form-add-update.component.scss']
})
export class FormAddUpdateComponent {
  @Input() title!: string;
  @Input() filter!: string;
  @Input() buttonLabel!: string;
  @Input() formData: any;

  @Output() onSave = new EventEmitter<any>();
  @Output() onClear = new EventEmitter<any>();
  @Output() isValid = new EventEmitter<any>();

  isFormValid() {
    this.isValid.emit();
    return true;
  }

  save() {
    this.onSave.emit(this.formData);
  }

  clear() {
    this.onClear.emit();
  }
}
