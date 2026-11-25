import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MatCardModule, CommonModule],
  selector: 'app-contact-details',
  styleUrl: './contact-details.css',
  templateUrl: './contact-details.html',
})
export class ContactDetails implements OnInit{
  id:number;
  persona:any;

  constructor(
    private service:ProvaServices,
    private route:ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = + params.get("id");
      this.persona = this.service.getPersona(this.id);
    })
  }

}
