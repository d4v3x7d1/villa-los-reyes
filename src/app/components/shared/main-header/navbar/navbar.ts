import { Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangSelector } from './lang-selector/lang-selector';
// import { LanguageSelector } from "../language-selector/language-selector";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [LangSelector, TranslatePipe, RouterLink, RouterLinkActive]
})
export class Navbar {

  menuOpen = false;
  lastScroll = 0;
  navbarHidden = false;

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

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScroll && currentScroll > 80) {
      // 🔽 Bajando → ocultar
      this.navbarHidden = true;
    } else {
      // 🔼 Subiendo → mostrar
      this.navbarHidden = false;
    }

    this.lastScroll = currentScroll;
  }
}
