import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { AuthData } from 'src/app/core/interfaces/auth-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService<AuthData>,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(authData: AuthData) {
    this.authService
      .login(authData)
      .pipe(
        tap(() => this.router.navigate(['/notes'])),
        catchError((err) => of(this.toastr.error('User incorrect!')))
      )
      .subscribe();
  }
}
