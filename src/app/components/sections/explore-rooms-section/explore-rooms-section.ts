import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'explore-rooms-section',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './explore-rooms-section.html',
  styleUrl: './explore-rooms-section.css'
})
export class ExploreRoomsSection {
  title = input<string>();
  description = input<string>();
  rooms = input<{
    src: string;
    alt: string;
    name: string;
    details: string;
    path: string;
}[]>([]);
  link = input<string>();


}
