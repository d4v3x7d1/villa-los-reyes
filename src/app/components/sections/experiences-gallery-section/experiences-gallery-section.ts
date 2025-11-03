import { Component, input } from '@angular/core';

@Component({
  selector: 'grid-gallery',
  templateUrl: './experiences-gallery-section.html',
  styleUrl: './experiences-gallery-section.css'
})
export class ExperiencesGallerySection {
  items = input.required<{ src: string; label: string }[]>();
}
