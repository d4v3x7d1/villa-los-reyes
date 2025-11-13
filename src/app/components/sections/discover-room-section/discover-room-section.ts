import { Component, input } from '@angular/core';
import { InfoPanel } from '../../shared/info-panel/info-panel';
import { RoomsGallery } from './rooms-gallery/rooms-gallery';

@Component({
  selector: 'discover-room-section',
  standalone: true,
  imports: [InfoPanel, RoomsGallery],
  templateUrl: './discover-room-section.html',
  styleUrl: './discover-room-section.css'
})
export class DiscoverRoomSection {
  info = input.required<{ title: string; description: string; link: { text: string; url: string }; }>();
  rooms = input.required<{ src: string; alt: string; name: string; details: string; path:string}[]>();
}
