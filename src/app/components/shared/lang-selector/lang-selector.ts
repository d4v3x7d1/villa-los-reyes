import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type LanguageCode = 'es' | 'en' | 'fr';

interface Language {
  code: LanguageCode;
  class: string;
}

@Component({
  selector: 'app-lang-selector',
  standalone: true,
  templateUrl: './lang-selector.html',
  styleUrl: './lang-selector.css'
})
export class LangSelector {
  currentLang: Language = { code: 'es', class: 'fi fi-es' };

  languages: Language[] = [
    { code: 'es', class: 'fi fi-es' },
    { code: 'en', class: 'fi fi-gb' },
    { code: 'fr', class: 'fi fi-fr' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.use(this.currentLang.code);
  }

  setLanguage(lang: Language) {
    this.currentLang = lang;
    this.translate.use(lang.code);
  }
}



