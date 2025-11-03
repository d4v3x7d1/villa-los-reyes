import { Component } from '@angular/core';
import { DiscoverServicesSection } from '../../components/sections/discover-services-section/discover-services-section';

@Component({
  selector: 'discover-services-default',
  imports: [DiscoverServicesSection],
  template: `
    <discover-services-section
      [header]="header"
      [services]="services"/>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class DiscoverServicesDefault {
  header = {
    title: 'discoverServices.header.title',
    description: 'discoverServices.header.description',
    link: { text: 'discoverServices.header.linkText', url: '/services-facilities' }
  };

  services = [
    {
      src: '/assets/images/restaurant/slide-dining-area-02.jpg',
      alt: 'discoverServices.services.gastronomy.alt',
      title: 'discoverServices.services.gastronomy.title',
      path: '/services-facilities/services',
      fragment: 'gastronomy'
    },
    {
      src: '/assets/images/vehicles/vehicle-01.jpg',
      alt: 'discoverServices.services.mobility.alt',
      title: 'discoverServices.services.mobility.title',
      path: '/services-facilities/services',
      fragment: 'mobility'
    },
    {
      src: '/assets/images/amenities/slide-trip-planner.jpg',
      alt: 'discoverServices.services.tripPlanner.alt',
      title: 'discoverServices.services.tripPlanner.title',
      path: '/services-facilities/services',
      fragment: 'tripPlanner'
    },
    {
      src: '/assets/images/amenities/slide-massage.jpg',
      alt: 'discoverServices.services.massages.alt',
      title: 'discoverServices.services.massages.title',
      path: '/services-facilities/services',
      fragment: 'massages'
    },
    {
      src: '/assets/images/amenities/slide-laundry.jpg',
      alt: 'discoverServices.services.laundry.alt',
      title: 'discoverServices.services.laundry.title',
      path: '/services-facilities/services',
      fragment: 'laundry'
    }
  ];
}
