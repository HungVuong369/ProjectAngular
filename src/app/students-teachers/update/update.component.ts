import { Component } from '@angular/core';
import { Person } from '../Class/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../Service/person.service';
import { ToastrNotifierService } from 'src/app/Notifier/toastr-notifier.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  filter = this.dataService.filter;
  item: Person = { name: '', address: '', phone: '', role: this.dataService.filter, checked: false };
  titleShow = this.filter === 'student' ? 'học sinh' : 'giáo viên';

  constructor(private route: ActivatedRoute, private router: Router, private dataService: PersonService, private notifier: ToastrNotifierService) {
    this.route.params.subscribe(params => {
      this.item.name = params['name'];
      this.item.phone = params['phone'];
      this.item.address = params['address'];
    });
  }

  save(): void {
    if (this.item.name && this.item.address && this.item.phone) {
      this.route.params.subscribe(params => {
        var phone = params['phone'];
        var index = this.dataService.peopleData.findIndex(p => p.phone === phone);
        if (index !== -1) {
          this.dataService.peopleData[index] = this.item;
          this.notifier.showSuccess('CẬP NHẬT THÀNH CÔNG!', '');
        }
        this.router.navigate(['/list']);
      });
    }
  }

  isFormValid(): boolean {
    if (this.item.name == '' || this.item.address == '' || this.item.phone == '')
      return false;
    return true;
  }

  reset(): void {
    this.route.params.subscribe(params => {
      this.item.name = params['name'];
      this.item.phone = params['phone'];
      this.item.address = params['address'];
    });
  }
}
