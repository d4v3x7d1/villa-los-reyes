import { Component } from '@angular/core';
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { MainHeaderSection } from "../../components/sections/main-header-section/main-header-section";
import { SplitLayoutSection } from "../../components/sections/split-layout-section/split-layout-section";

@Component({
  selector: 'services-page',
  imports: [GalleryInfoSection, MainHeaderSection, SplitLayoutSection],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {

}
