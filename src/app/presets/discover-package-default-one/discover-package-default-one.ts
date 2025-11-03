import { Component } from '@angular/core';
import { DiscoverPackageSection } from "../../components/sections/discover-package-section/discover-package-section";

@Component({
  selector: 'discover-package-default-one',
  imports: [DiscoverPackageSection],
  template: `
   <discover-package-section 
      [header]="header"
      [packages]="packages"
    ></discover-package-section>
  `,
  styles: ``
})
export class DiscoverPackageDefaultOne {
  header = {
    title: 'packages.title',
    description: 'packages.description',
    link: { text: 'packages.linkText', url: '/paquetes' }// TODO: update this path
  };

  packages = [
    {
      src: '/assets/images/adventures/slide-horse-riding-02.jpg',
      alt: 'Cabalgata y aventura en Viñales',
      title: 'packages.packageOne.title',
      duration: 'packages.packageOne.duration',
      description: 'packages.packageOne.description',
      price: 'packages.packageOne.price',
      path: '/TODO-adjust-path' // TODO: update this path
    },
    {
      src: '/assets/images/adventures/slide-beach-02.jpg',
      alt: 'Relax y playas cercanas',
      title: 'packages.packageTwo.title',
      duration: 'packages.packageTwo.duration',
      description: 'packages.packageTwo.description',
      price: 'packages.packageTwo.price',
      path: '/TODO-adjust-path' // TODO: update this path
    },
    {
      src: '/assets/images/adventures/slide-romance.jpg',
      alt: 'Escapada romántica en Viñales',
      title: 'packages.packageThree.title',
      duration: 'packages.packageThree.duration',
      description: 'packages.packageThree.description',
      price: 'packages.packageThree.price',
      path: '/TODO-adjust-path' // TODO: update this path
    }
  ];
}
