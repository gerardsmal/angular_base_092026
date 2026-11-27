import { Component, inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UtenteServices } from '../../services/utente-services';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, MatFormField, MatLabel, MatInputModule, MatAnchor],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  msg = signal("");
  @ViewChild('registerForm') registerForm:NgForm;

  readonly utenteS: UtenteServices = inject(UtenteServices);
  readonly routing:Router = inject(Router);

  onSubmit(){
 this.utenteS.create({
      userName:this.registerForm.value.userName,
      pwd:this.registerForm.value.password,
      email:this.registerForm.value.email,
      role:'USER'
    }).subscribe({
      next:((r:any) => {
        this.routing.navigate(['login'])
      }),
      error:((r:any) => {
         this.msg.set(r.error.msg);
      })
    })
  }
}
