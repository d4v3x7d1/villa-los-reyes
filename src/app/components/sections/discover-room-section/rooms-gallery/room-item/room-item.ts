import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'room-item',
  templateUrl: './room-item.html',
  styleUrls: ['./room-item.css'],  // corregido: era styleUrl → styleUrls
  imports: [TranslatePipe,RouterLink]
})
export class RoomItem {
  src = input<string>('');
  alt = input<string>('');
  name = input<string>('');
  details = input<string>('');
  link = input<string>();

  // Nuevo input para controlar el contexto/variante
  variant = input<'default' | 'discover'>('default');
}
