import { Service } from '@angular/core';

@Service()
export class ProvaServices {
    private persone = [
        {nome: 'Mario', cognome: 'Rossi', isOnline: true, colore: 'red'},
        {nome: 'Luigi', cognome: 'Verdi', isOnline: false, colore: 'green'},
        {nome: 'Giovanni', cognome: 'Bianchi', isOnline: true, colore: 'blue'},
        {nome: 'Anna', cognome: 'Gialla', isOnline: false, colore: 'pink'},
        {nome: 'Marcella', cognome: 'Stanca', isOnline: true, colore: 'brown'},
        {nome: 'Diana', cognome: 'Adreallo', isOnline: false, colore: 'black' },     
  ];
  getPersone(){
    return this.persone;
  }

  getPersona(index:number){
    return this.persone[index];
  }
}
