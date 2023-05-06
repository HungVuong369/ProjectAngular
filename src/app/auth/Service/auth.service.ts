import { Injectable } from '@angular/core';
import { Account } from '../Class/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accounts: Account[] = [
    {username: 'admin', password: 'admin123', gmail: 'admin@gmail.com'},
  ];
  constructor() { }

  isExist(account: Account) : boolean {
    const isExisting = this.accounts.some(
      item => item.username === account.username && item.password === account.password
    );
    return isExisting;
  }

  isRegister(account: Account) : boolean {
    const isExisting = this.accounts.some(
      item => item.username === account.username || item.gmail === account.gmail
    );
    return isExisting;
  }

  Add(account: Account) {
    this.accounts.push(account);
  }
}
