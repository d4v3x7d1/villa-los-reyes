import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './garbage-components/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'villa-los-reyes';
}
