import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Position } from '../../shared/interfaces/app-interfaces';


@Component({
  selector: 'main-header-section',
  templateUrl: './main-header-section.html',
  styleUrls: ['./main-header-section.css'],
  imports:[TranslatePipe]
})
export class MainHeaderSection {
  head = input.required<{ title: string; description: string }>();
  image = input<{ src: string; alt: string }>();
  objectPosition = input<Position>("center");
}

// main-header-section
