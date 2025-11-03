import { Component, input } from '@angular/core';
import { MainHeaderSection } from "../../sections/main-header-section/main-header-section";
import { Position } from '../../shared/interfaces/app-interfaces';

@Component({
  selector: 'app-package-base-page',
  imports: [MainHeaderSection],
  templateUrl: './package-base-page.html',
  styleUrl: './package-base-page.css'
})
export class PackageBasePage {
  header = input.required<{
    head: { title: string; description: string };
    image: { src: string; alt: string };
    objectPosition: Position;
  }>();
}
