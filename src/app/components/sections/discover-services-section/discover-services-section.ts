import { Component, input } from '@angular/core';
import { SectionHeader } from "../../shared/section-header/section-header";
import { ServicesGallery } from "../../shared/services-gallery/services-gallery";

@Component({
  selector: 'discover-services-section',
  templateUrl: './discover-services-section.html',
  styleUrls: ['./discover-services-section.css'],
  imports: [SectionHeader, ServicesGallery]
})
export class DiscoverServicesSection {
  header = input.required<{ title: string; description: string; link: { text: string; url: string } }>();
  services = input.required<Array<{ title: string; src: string; alt: string ;path:string;fragment:string}>>();

}
