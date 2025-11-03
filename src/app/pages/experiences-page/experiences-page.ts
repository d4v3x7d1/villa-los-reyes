import { Component } from '@angular/core';
import { MainHeaderSection } from "../../components/sections/main-header-section/main-header-section";
import { SplitGallerySection } from "../../components/sections/split-gallery-section/split-gallery-section";
import { DiscoverPackageDefaultOne } from "../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../presets/discover-services-default/discover-services-default";
import { HexColor, Position } from '../../components/shared/interfaces/app-interfaces';

interface Image {
  src: string;
  alt: string;  // aquí será la key del JSON
  name?: string; // aquí será la key del JSON
  details?: string;
  path?: string;
}

interface SectionInfo {
  title: string;       // key JSON
  description: string; // key JSON
  link: { text: string; url: string }; // text será key JSON, url sigue estático
}

@Component({
  selector: 'experiences',
  imports: [MainHeaderSection, SplitGallerySection, DiscoverPackageDefaultOne, DiscoverServicesDefault],
  templateUrl: './experiences-page.html',
  styleUrl: './experiences-page.css'
})
export class ExperiencesPage {
  header: { title: string; description: string; image: { src: string; alt: string }; objectPosition: Position } = {
    title: 'experiencesContent.header.title',
    description: 'experiencesContent.header.description',
    image: { src: '/assets/images/experiences/experiences-header.jpg', alt: 'experiencesContent.header.alt' },
    objectPosition: 'center center'
  };

  gallerySections: {
    leftImage: Image;
    info: SectionInfo;
    rightImages: Image[];
    color: HexColor;
    reverse?: boolean;
    hasHostBg?: boolean;
  }[] = [
    {
      leftImage: { src: '/assets/images/adventures/slide-horse-riding-01.jpg', alt: 'experiencesContent.gallerySections.0.leftImageAlt', name: 'experiencesContent.gallerySections.0.leftImageName' },
      info: {
        title: 'experiencesContent.gallerySections.0.infoTitle',
        description: 'experiencesContent.gallerySections.0.infoDescription',
        link: { text: 'experiencesContent.gallerySections.0.linkText', url: '/experiences/horseback-riding' }
      },
      rightImages: [
        { src: '/assets/images/adventures/slide-horse-riding-02.jpg', alt: 'experiencesContent.gallerySections.0.rightImages.0.alt', name: 'experiencesContent.gallerySections.0.rightImages.0.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-horse-riding-03.jpg', alt: 'experiencesContent.gallerySections.0.rightImages.1.alt', name: 'experiencesContent.gallerySections.0.rightImages.1.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-horse-riding-04.jpg', alt: 'experiencesContent.gallerySections.0.rightImages.2.alt', name: 'experiencesContent.gallerySections.0.rightImages.2.name', path: '/TODO-adjust-path' }
      ],
      color: '#f7faf7',
      hasHostBg: false
    },
    {
      leftImage: { src: '/assets/images/adventures/slide-hiking.jpg', alt: 'experiencesContent.gallerySections.1.leftImageAlt', name: 'experiencesContent.gallerySections.1.leftImageName' },
      info: {
        title: 'experiencesContent.gallerySections.1.infoTitle',
        description: 'experiencesContent.gallerySections.1.infoDescription',
        link: { text: 'experiencesContent.gallerySections.1.linkText', url: '/experiences/hiking' }
      },
      rightImages: [
        { src: '/assets/images/adventures/slide-hell-to-paradise.jpg', alt: 'experiencesContent.gallerySections.1.rightImages.0.alt', name: 'experiencesContent.gallerySections.1.rightImages.0.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-amazing-sunrise.jpg', alt: 'experiencesContent.gallerySections.1.rightImages.1.alt', name: 'experiencesContent.gallerySections.1.rightImages.1.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-tobacco-inside.jpg', alt: 'experiencesContent.gallerySections.1.rightImages.2.alt', name: 'experiencesContent.gallerySections.1.rightImages.2.name', path: '/TODO-adjust-path' }
      ],
      color: '#E4EAE5',
      reverse: true
    },
    {
      leftImage: { src: '/assets/images/adventures/slide-cycling.jpg', alt: 'experiencesContent.gallerySections.2.leftImageAlt', name: 'experiencesContent.gallerySections.2.leftImageName' },
      info: {
        title: 'experiencesContent.gallerySections.2.infoTitle',
        description: 'experiencesContent.gallerySections.2.infoDescription',
        link: { text: 'experiencesContent.gallerySections.2.linkText', url: '/experiences/cycle-tours' }
      },
      rightImages: [
        { src: '/assets/images/adventures/slide-the-calvary.jpg', alt: 'experiencesContent.gallerySections.2.rightImages.0.alt', name: 'experiencesContent.gallerySections.2.rightImages.0.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-the-slippery-one.jpg', alt: 'experiencesContent.gallerySections.2.rightImages.1.alt', name: 'experiencesContent.gallerySections.2.rightImages.1.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-through-the-valleys.jpg', alt: 'experiencesContent.gallerySections.2.rightImages.2.alt', name: 'experiencesContent.gallerySections.2.rightImages.2.name', path: '/TODO-adjust-path' }
      ],
      color: '#f7faf7'
    },
    {
      leftImage: { src: '/assets/images/adventures/slide-beach-01.jpg', alt: 'experiencesContent.gallerySections.3.leftImageAlt', name: 'experiencesContent.gallerySections.3.leftImageName' },
      info: {
        title: 'experiencesContent.gallerySections.3.infoTitle',
        description: 'experiencesContent.gallerySections.3.infoDescription',
        link: { text: 'experiencesContent.gallerySections.3.linkText', url: '/experiences/other' }
      },
      rightImages: [
        { src: '/assets/images/adventures/slide-paradise-beach.jpg', alt: 'experiencesContent.gallerySections.3.rightImages.0.alt', name: 'experiencesContent.gallerySections.3.rightImages.0.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-intense-day.jpg', alt: 'experiencesContent.gallerySections.3.rightImages.1.alt', name: 'experiencesContent.gallerySections.3.rightImages.1.name', path: '/TODO-adjust-path' },
        { src: '/assets/images/adventures/slide-vinales-day-trip.jpg', alt: 'experiencesContent.gallerySections.3.rightImages.2.alt', name: 'experiencesContent.gallerySections.3.rightImages.2.name', path: '/TODO-adjust-path' }
      ],
      color: '#E4EAE5',
      reverse: true
    }
  ];
}
