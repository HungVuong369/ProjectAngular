import { Component } from '@angular/core';
import { Person } from '../Class/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../Service/person.service';
import { ToastrNotifierService } from 'src/app/Notifier/toastr-notifier.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  username = localStorage.getItem('username');
  filter = this.personService.filter;
  titleShow = this.filter === 'student' ? 'học sinh' : 'giáo viên';
  
  person: Person = { name: '', address: '', phone: '', role: this.personService.filter, checked: false };

  constructor(private route: ActivatedRoute, private router: Router, public personService: PersonService, private notifier: ToastrNotifierService) { }

  save(): void {
    if (this.person.name && this.person.address && this.person.phone) {
      this.personService.Add(this.person);
      this.notifier.showSuccess('THÊM THÀNH CÔNG!', '');
      this.router.navigate(['/list']);
    }
  }

  clear(): void {
    this.person.name = '';
    this.person.address = '';
    this.person.phone = '';
  }

  isFormValid(): boolean {
    const { name, address, phone } = this.person ?? {};

    return !!name && !!address && !!phone;
  }
}
