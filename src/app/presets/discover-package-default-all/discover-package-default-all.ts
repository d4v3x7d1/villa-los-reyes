import { Component } from '@angular/core';
import { DiscoverPackageSection } from "../../components/sections/discover-package-section/discover-package-section";
import { DiscoverAllPackageSection } from "../../components/sections/discover-all-package-section/discover-all-package-section";

@Component({
  selector: 'discover-package-default-all',
  imports: [DiscoverAllPackageSection],
  template: `

    <discover-all-package-section
      [packages]="packages" [header]="header"
    ></discover-all-package-section>
  `,
  styles: ``
})
export class DiscoverPackageDefaultAll {
  header = {
    title: 'Ofertas disponibles',
    description: 'Descubre nuestros paquetes promocionales y ahorra mientras disfrutas de ofertas exclusivas diseñadas para ti. ¡Aprovecha ahora!'
  };


  packages = [
    {
      src: '/assets/images/adventures/slide-horse-riding-02.jpg',
      alt: 'Cabalgata y aventura en Viñales',
      title: 'packages.packageOne.title',
      duration: 'packages.packageOne.duration',
      description: 'packages.packageOne.description',
      price: 'packages.packageOne.price',
      path: '/TODO-adjust-path'
    },
    {
      src: '/assets/images/adventures/slide-beach-02.jpg',
      alt: 'Relax y playas cercanas',
      title: 'packages.packageTwo.title',
      duration: 'packages.packageTwo.duration',
      description: 'packages.packageTwo.description',
      price: 'packages.packageTwo.price',
      path: '/TODO-adjust-path'
    },
    {
      src: '/assets/images/adventures/slide-romance.jpg',
      alt: 'Escapada romántica en Viñales',
      title: 'packages.packageThree.title',
      duration: 'packages.packageThree.duration',
      description: 'packages.packageThree.description',
      price: 'packages.packageThree.price',
      path: '/TODO-adjust-path'
    },
    {
      src: '/assets/images/adventures/slide-tobacco-farmer.jpg',
      alt: 'Tabacalero y cultura campesina',
      title: 'packages.packageFour.title',
      duration: 'packages.packageFour.duration',
      description: 'packages.packageFour.description',
      price: 'packages.packageFour.price',
      path: '/TODO-adjust-path'
    },
    {
      src: '/assets/images/adventures/slide-vinales-360.jpg',
      alt: 'Panorámica de Viñales 360°',
      title: 'packages.packageFive.title',
      duration: 'packages.packageFive.duration',
      description: 'packages.packageFive.description',
      price: 'packages.packageFive.price',
      path: '/TODO-adjust-path'
    },
    {
      src: '/assets/images/adventures/slide-sunset.jpg',
      alt: 'Atardecer en Viñales',
      title: 'packages.packageSix.title',
      duration: 'packages.packageSix.duration',
      description: 'packages.packageSix.description',
      price: 'packages.packageSix.price',
      path: '/TODO-adjust-path'
    }
  ];
}
