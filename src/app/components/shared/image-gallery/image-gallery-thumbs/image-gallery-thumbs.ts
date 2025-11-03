import { Component, input } from '@angular/core';
import { ThumbItem } from "./thumb-item/thumb-item";
import { UnitString } from '../../interfaces/app-interfaces';


@Component({
  selector: 'image-gallery-thumbs',
  imports: [ThumbItem],
  templateUrl: './image-gallery-thumbs.html',
  styleUrl: './image-gallery-thumbs.css'
})
export class ImageGalleryThumbs {

  images = input.required<{src:string,alt:string}[]>();

  width = input.required<UnitString>();
  height = input<UnitString>();
  gap = input<UnitString>("0px");

  getThumbWidth(length: number): string {
    const gapValue = parseFloat(this.gap().replace('px', '')) || 0;
    const totalGaps = (length - 1) * gapValue;
    return `calc((100% - ${totalGaps}px) / ${length})`;
  }
}


