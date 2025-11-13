import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'room-item',
  templateUrl: './room-item.html',
  styleUrl: './room-item.css',
  imports:[TranslatePipe]
})
export class RoomItem {
  src = input<string>('');
  alt =input<string>('');
  name = input<string>('');
  details = input<string>('');
}
