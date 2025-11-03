import { Component } from '@angular/core';
import { SplitLayoutSection } from "../../components/sections/split-layout-section/split-layout-section";
import { GalleryInfoSection } from "../../components/sections/gallery-info-section/gallery-info-section";
import { MainHeaderSection } from "../../components/sections/main-header-section/main-header-section";

@Component({
  selector: 'about-page',
  imports: [GalleryInfoSection, MainHeaderSection, SplitLayoutSection],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {

}
