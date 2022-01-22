import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

import { AuthData } from 'src/app/core/interfaces/auth-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  constructor(
    private readonly authService: AuthService<AuthData>,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  register(data: AuthData) {
    this.authService
      .register(data)
      .pipe(
        tap(() => this.router.navigate(['/notes'])),
        catchError((err) =>
          of(this.toastr.error('ERROR: User already exists!'))
        )
      )
      .subscribe();
  }
}
