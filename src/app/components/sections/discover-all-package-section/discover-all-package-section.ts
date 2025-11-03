import { Component, input } from '@angular/core';
import { PackagesList } from "../../shared/packages-list/packages-list";

@Component({
  selector: 'discover-all-package-section',
  imports: [PackagesList],
  templateUrl: './discover-all-package-section.html',
  styleUrl: './discover-all-package-section.css'
})
export class DiscoverAllPackageSection {
  header = input.required<{
    title: string,
    description: string
  }>();

  packages = input.required<
    {
      src: string;
      alt: string;
      title: string;
      duration: string;
      description: string;
      price: string;
      path: string;
    }[]
  >();
}
