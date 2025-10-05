import { Component } from '@angular/core';
import { LangSelector } from "../lang-selector/lang-selector";
import { TranslatePipe } from '@ngx-translate/core';
// import { LanguageSelector } from "../language-selector/language-selector";

@Component({
  selector: 'app-navbar',
  // imports: [LanguageSelector],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [LangSelector,TranslatePipe]
})
export class Navbar {

}
