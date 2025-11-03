import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'adventure-gallery-section',
  imports: [RouterLink],
  templateUrl: './adventure-gallery-section.html',
  styleUrl: './adventure-gallery-section.css'
})
export class AdventurekGallerySection {

  items = input.required<{ src: string; label: string; path: string }[]>();
}

