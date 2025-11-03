import { Component, input } from '@angular/core';
import { ImageGalleryThumbs } from './image-gallery-thumbs/image-gallery-thumbs';
import { ImageGalleryMain } from './image-gallery-main/image-gallery-main';
import { UnitString } from '../interfaces/app-interfaces';

interface ImageData {
  src: string;
  alt: string;
}

@Component({
  selector: 'image-gallery',
  imports: [ImageGalleryThumbs, ImageGalleryMain],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css'
})
export class ImageGallery {
  // Ancho total (flexible por defecto)
  width = input<UnitString>('100%');

  // Altura del área principal (imagen grande)
  mainHeight = input<UnitString>('40vh');

  // Altura de la zona de miniaturas
  thumbHeight = input<UnitString>('20vh');

  // Imagen principal
  image = input.required<{ src: string, alt: string }>();

  // Lista de miniaturas
  images = input.required<{ src: string, alt: string }[]>();

  // Espaciado entre las secciones
  gap = input<UnitString>('0.5rem');
}
