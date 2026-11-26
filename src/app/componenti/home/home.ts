import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { PersoneServices } from '../../services/persone-services';


@Component({
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  //@ViewChild('homeForm') homeForm: NgForm;

  homeForm: FormGroup = new FormGroup({
    nome : new FormControl(null,Validators.required),
    cognome: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    colore: new FormControl(),  
  })

  private service = inject(PersoneServices);

  onSubmit(){
    this.service.create({
      nome:this.homeForm.value.nome,
      cognome: this.homeForm.value.cognome,
      email: this.homeForm.value.email,
      colore: this.homeForm.value.colore
    }).subscribe({
      next:((r:any) => {
        console.log(r.msg);
        this.homeForm.reset();
      }),
      error:((r:any) => {
        console.log(r);
      })
    })
  
  }

  onSubmit1(form: NgForm){
    console.log(form.value);
    console.log("cognome:" + form.value.cognome)
  }
}
