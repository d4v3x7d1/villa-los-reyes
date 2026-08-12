import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooter } from "./shared/components/main-footer/main-footer";
import { MainHeader } from "./shared/components/main-header/main-header";
import { SeoService } from "./shared/services/seo.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeader, MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'villa-los-reyes';
  private seo = inject(SeoService);

  constructor() {
    this.seo.setFromKeys('HEADER.HOME.TITLE', 'HEADER.HOME.DESCRIPTION', {
      image: 'assets/imgs/outdoor/carousel/villa-los-reyes-facade-vinales.webp',
    });
  }
}





