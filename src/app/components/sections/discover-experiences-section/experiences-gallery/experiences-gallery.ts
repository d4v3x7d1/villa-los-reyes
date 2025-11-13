import { Component, input } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'experiences-gallery',
  imports: [ExperienceItemComponent,RouterLink],
  templateUrl: './experiences-gallery.html',
  styleUrls: ['./experiences-gallery.css']
})
export class ExperiencesGallery {
    experiences = input.required<{ src: string; alt: string; title: string; link: string }[]>();

}
