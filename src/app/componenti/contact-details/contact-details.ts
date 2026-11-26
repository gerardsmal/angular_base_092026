import { Component, OnInit, signal } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PersoneServices } from '../../services/persone-services';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatCardModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule, MatButtonModule],
  selector: 'app-contact-details',
  styleUrl: './contact-details.css',
  templateUrl: './contact-details.html',
})
export class ContactDetails implements OnInit{
  id:number;
  persona = signal<any | null>(null);
  updateForm: FormGroup = new FormGroup({      
    nome : new FormControl(null,Validators.required),
    cognome: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    colore: new FormControl(),  
  })


  constructor(
    private service:PersoneServices,
    private route:ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = + params.get("id");
      this.service.getById(this.id)
        .subscribe({
          next: ((r:any ) => {
          this.persona.set(r);
            this.updateForm.patchValue({
              nome: r.nome,
              cognome : r.cognome,
              email : r.email,
              colore : r.colore
            })
          }),
          error:((r:any) => {
            console.log(r);
          })
        })
    })
  }

  onSubmit(){

  }
}
