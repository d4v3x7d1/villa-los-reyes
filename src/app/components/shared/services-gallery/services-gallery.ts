import { Component, input } from '@angular/core';
import { ServiceItem } from '../service-item/service-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'services-gallery',
  imports: [ServiceItem,RouterLink],
  templateUrl: './services-gallery.html',
  styleUrl: './services-gallery.css'
})
export class ServicesGallery {
  services = input.required<{ title: string; src: string; alt: string;path:string;fragment:string }[]>();
}
