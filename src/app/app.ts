import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from './prova/prova';

@Component({
  imports: [RouterOutlet, Prova],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('corso_angular');
}
