import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username = ''; // Initialize username property
  password = ''; // Initialize password property

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        // Handle successful registration here
        console.log(response);
      },
      (error) => {
        // Handle registration error here
        console.log(error);
      }
    );
  }
}
