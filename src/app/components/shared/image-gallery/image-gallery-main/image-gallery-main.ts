import { ImageGallery } from './../image-gallery';
import { Component, input } from '@angular/core';

@Component({
  selector: 'image-gallery-main',
  imports: [],
  templateUrl: './image-gallery-main.html',
  styleUrl: './image-gallery-main.css'
})
export class ImageGalleryMain {
  image = input.required<{src:string,alt:string}>();

}
