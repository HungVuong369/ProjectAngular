import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string | null = null;

  constructor(router: Router) {
    this.username = localStorage.getItem('username');
    if(this.username == null)
      router.navigate(['']);
      
  }
}