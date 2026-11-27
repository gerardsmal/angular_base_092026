import { Component, inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { UtenteServices } from '../../services/utente-services';
import { AuthService } from '../../auth/auth-service';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, MatFormField, MatLabel, MatInputModule, MatAnchor],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  msg = signal("");
  @ViewChild('loginForm') loginForm:NgForm;

  readonly utenteS: UtenteServices = inject(UtenteServices);
  readonly authServices:AuthService = inject(AuthService);
  readonly routing:Router = inject(Router);

  onSubmit(){
    this.utenteS.login({
      userName:this.loginForm.value.userName,
      password:this.loginForm.value.password
    }).subscribe({
      next:((r:any) => {
        this.msg.set("");
        this.authServices.setAutentificated();
        if(r.role === 'ADMIN')
          this.authServices.setAdmin();
        else
          this.authServices.setUser();
        this.routing.navigate(['home']);
      }),
      error:((r:any) => {
        this.msg.set(r.error.msg);
      })
    })
  }
  newUtente(){
    this.routing.navigate(['register'])
  }
}
