import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  selector: 'app-prova',
  styleUrl: './prova.css',
  templateUrl: './prova.html',
})

export class Prova implements OnInit{

  constructor() {
    console.log('Prova component constructor called');   
  }
  
  ngOnInit(): void {
    console.log('Prova component initialized');
  }

  cani = [
    {nome: 'roger', razza: 'labrador', descrizione: 'cane da compagnia'},
  ]

  isDisabled = false;

  hoCliccato( e: any) {
    console.log('Hai cliccato il pulsante!' + e );
  }

  onInput(event: Event) {
    //console.log('Input event triggered:', event);
    console.log((<HTMLInputElement>event.target).value);
  }
}
