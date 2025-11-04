import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSection } from "./components/sections/navbar-section/navbar-section";
import { PromoBanner } from "./components/shared/promo-banner/promo-banner";
import { FooterSection } from "./components/sections/footer-section/footer-section";
import { AuthService } from './services/auth';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PromoBanner, FooterSection, NavbarSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'villa-los-reyes';
}





