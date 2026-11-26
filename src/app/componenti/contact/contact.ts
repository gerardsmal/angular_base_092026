import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersoneServices } from '../../services/persone-services';



@Component({
  imports: [CommonModule, RouterLink, RouterOutlet],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact  implements OnInit{
  
  persone:any;  
  constructor(private service:PersoneServices,
  ){
    this.persone = this.service.persone;
  }
  
  ngOnInit(): void {
      this.service.list();
  }

}
