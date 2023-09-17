import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = ''; // Initialize username property
  password = ''; // Initialize password property

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login here
        console.log(response);
      },
      (error) => {
        // Handle login error here
        console.log(error);
      }
    );
  }
}
