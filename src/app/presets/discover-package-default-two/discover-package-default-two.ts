import { Component } from '@angular/core';
import { DiscoverPackageSection } from "../../components/sections/discover-package-section/discover-package-section";

@Component({
  selector: 'discover-package-default-two',
  imports: [DiscoverPackageSection],
  template: `
      <discover-package-section
      [header]="header"
      [packages]="packages"
    ></discover-package-section>
  `,
  styles: ``
})
export class DiscoverPackageDefaultTwo {

  header = {
    title: 'packages.title',
    description: 'packages.description',
    link: { text: 'packages.linkText', url: '/paquetes' }// TODO: update this path
  };

  packages = [
    {
      src: '/assets/images/adventures/slide-tobacco-farmer.jpg',
      alt: 'Cabalgata y aventura en Viñales',
      title: 'packages.packageFour.title',
      duration: 'packages.packageFour.duration',
      description: 'packages.packageFour.description',
      price: 'packages.packageFour.price',
      path: '/TODO-adjust-path' // TODO: update this path
    },
    {
      src: '/assets/images/adventures/slide-vinales-360.jpg',
      alt: 'Relax y playas cercanas',
      title: 'packages.packageFive.title',
      duration: 'packages.packageFive.duration',
      description: 'packages.packageFive.description',
      price: 'packages.packageFive.price',
      path: '/TODO-adjust-path' // TODO: update this path
    },
    {
      src: '/assets/images/adventures/slide-sunset.jpg',
      alt: 'Escapada romántica en Viñales',
      title: 'packages.packageSix.title',
      duration: 'packages.packageSix.duration',
      description: 'packages.packageSix.description',
      price: 'packages.packageSix.price',
      path: '/TODO-adjust-path' // TODO: update this path
    }
  ];
}



