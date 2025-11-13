import { Component, input } from '@angular/core';
import { RoomItem } from './room-item/room-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rooms-gallery',
  imports: [RoomItem,RouterLink],
  templateUrl: './rooms-gallery.html',
  styleUrl: './rooms-gallery.css'
})
export class RoomsGallery {
  rooms = input<{ src: string; alt: string; name: string; details: string;path:string }[]>([]);
}
