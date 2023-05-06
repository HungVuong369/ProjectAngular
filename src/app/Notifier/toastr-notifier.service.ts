import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotifierService {
  constructor(private toastr: ToastrService) { }

  showSuccess(text: string, childText: string) {
    this.toastr.success(childText, text);
  }

  showError(text: string, childText: string) {
    this.toastr.error(childText, text);
  }

  showInfo(text: string, childText: string) {
    this.toastr.info(childText, text);
  }

  showWarning(text: string, childText: string) {
    this.toastr.warning(childText, text);
  }
}
