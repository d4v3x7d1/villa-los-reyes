import { rooms as roomData } from './../../config/room-data';
import { Component, signal } from '@angular/core';
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { CarouselSection } from "../../components/sections/carousel-section/carousel-section";
import { DiscoverExperienceSection } from "../../components/sections/discover-experiences-section/discover-experience-section";
import { DiscoverRoomSection } from "../../components/sections/discover-room-section/discover-room-section";
import { DiscoverServicesDefault } from "../../presets/discover-services-default/discover-services-default";
import { DiscoverPackageDefaultOne } from "../../presets/discover-package-default-one/discover-package-default-one";

@Component({
  selector: 'home-page',
  imports: [GalleryInfoSection, CarouselSection, DiscoverExperienceSection, DiscoverRoomSection, DiscoverServicesDefault, DiscoverPackageDefaultOne],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',


})
export class HomePage {
  rooms = roomData;

}
