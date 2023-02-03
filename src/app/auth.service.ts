import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setStatusCode(status_code: string): void {
    localStorage.setItem('status code', status_code);
  }

  getStatusCode(): string | null {
    return localStorage.getItem('status code');
  }

  isLoggedIn() {
    return this.getStatusCode() !== null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}