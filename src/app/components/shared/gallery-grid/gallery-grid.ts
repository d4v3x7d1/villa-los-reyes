import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UnitString } from '../interfaces/app-interfaces';
@Component({
  selector: 'gallery-grid',
  imports: [TranslatePipe],
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.css'
})
export class GalleryGrid {

  mainImage = input.required<{
    src: string,
    alt: string,
  }>()
  thumbImages = input<{
    src: string,
    alt: string,
  }[]>()

    // Alturas opcionales
  mainHeight = input<UnitString>('45vh'); // por defecto 45vh
  thumbHeight = input<UnitString>('24vh'); // por defecto 24vh
}
