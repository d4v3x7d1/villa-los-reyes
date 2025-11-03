import { Component, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'carousel-section',
  imports: [TranslatePipe],
  templateUrl: './carousel-section.html',
  styleUrls: ['./carousel-section.css']
})
export class CarouselSection {
  slides = input.required<{ src: string; altKey: string; titleKey: string; subtitleKey: string }[]>();

  current = signal(0);

  next() {
    const total = this.slides()?.length ?? 0;
    if (total > 0) {
      this.current.update(v => (v + 1) % total);
    }
  }

  prev() {
    const total = this.slides()?.length ?? 0;
    if (total > 0) {
      this.current.update(v => (v - 1 + total) % total);
    }
  }

  goToSlide(index: number) {
    const total = this.slides()?.length ?? 0;
    if (index >= 0 && index < total) {
      this.current.set(index);
    }
  }
}

