import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gallery-experience-section',
  imports: [RouterLink],
  templateUrl: './gallery-experience-section.html',
  styleUrl: './gallery-experience-section.css'
})
export class GalleryExperienceSection {
  images = input.required<{ src: string; title: string; path: string }[]>();

}

