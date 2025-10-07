import { Component } from '@angular/core';
import { Navbar } from '../../components/shared/navbar/navbar';
// import { CarouselComponent } from "../../components/shared/carousel/carousel";
import { PromoBanner } from "../../components/shared/promo-banner/promo-banner";
import { Carousel } from '../../components/shared/carousel/carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
