import { Component, input } from '@angular/core';
import { PackageItem } from '../package-item/package-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'packages-list',
  standalone: true,
  imports: [PackageItem,RouterLink],
  templateUrl: './packages-list.html',
  styleUrls: ['./packages-list.css']
})
export class PackagesList {
  packages = input.required<
    {
      src: string;
      alt: string;
      title: string;
      duration: string;
      description: string;
      price: string;
      path:string;
    }[]
  >();
}
