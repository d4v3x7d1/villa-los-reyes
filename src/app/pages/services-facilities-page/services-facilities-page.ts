import { Component } from '@angular/core';
import { MainHeaderSection } from "../../components/sections/main-header-section/main-header-section";
import { SplitGallerySection } from "../../components/sections/split-gallery-section/split-gallery-section";
import { rooms as roomData} from '../../config/room-data';

@Component({
  selector: 'app-services',
  imports: [MainHeaderSection, SplitGallerySection],
  templateUrl: './services-facilities-page.html',
  styleUrl: './services-facilities-page.css'
})
export class ServicesFacilitiesPage {

  rooms = roomData
}
