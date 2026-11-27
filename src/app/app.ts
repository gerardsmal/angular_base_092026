import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth-service';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  
  protected readonly title = signal('corso_angular');
  readonly auth:AuthService = inject(AuthService);
  readonly routing:Router = inject(Router);

   persone = [{}]; 
   persone1 = [
    {nome: 'Mario', cognome: 'Rossi', isOnline: true, colore: 'red'},
    {nome: 'Luigi', cognome: 'Verdi', isOnline: false, colore: 'green'},
    {nome: 'Giovanni', cognome: 'Bianchi', isOnline: true, colore: 'blue'},
    {nome: 'Anna', cognome: 'Gialla', isOnline: false, colore: 'pink'},
    {nome: 'Marcella', cognome: 'Stanca', isOnline: true, colore: 'brown'},
    { nome: 'Diana', cognome: 'Adreallo', isOnline: false, colore: 'black' },     
  ];
   persone2 = [
    {nome: 'Aldo', cognome: 'Sgaveo', isOnline: true, colore: 'blue'},
    {nome: 'Maria', cognome: 'Trump', isOnline: false, colore: 'red'},
    {nome: 'Donald', cognome: 'Duck', isOnline: true, colore: 'yellow'},
    { nome: 'Rosaria', cognome: 'Bellesa', isOnline: false, colore: 'brown' },     
  ];


  ngOnInit(): void {
    this.persone = this.persone1;
  }
  onclick(){
    this.persone = this.persone2;
  }
  onRestore(){
    this.persone = this.persone1;
  }
  retrieveMessaggio(value: string){
    console.log("messaggio ricevuto:" + value);
  }

  logout(){
    this.auth.resetAll();
    this.routing.navigate(['home']);
  }
}
