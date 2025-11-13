import { Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangSelector } from './lang-selector/lang-selector';
// import { LanguageSelector } from "../language-selector/language-selector";

@Component({
  selector: 'navbar-section',
  templateUrl: './navbar-section.html',
  styleUrls: ['./navbar-section.css'],
  imports: [LangSelector, TranslatePipe, RouterLink, RouterLinkActive]
})
export class NavbarSection {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // IMPORTANTE: al redimensionar, si volvemos a escritorio >1328 cerramos el panel.
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 1328 && this.menuOpen) {
      this.menuOpen = false;
    }

  }
}
