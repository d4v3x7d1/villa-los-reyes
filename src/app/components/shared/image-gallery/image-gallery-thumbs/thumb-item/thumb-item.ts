import { Component, input } from '@angular/core';

@Component({
  selector: 'thumb-item',
  templateUrl: './thumb-item.html',
  styleUrls: ['./thumb-item.css']
})
export class ThumbItem {
  src = input.required<string>();
  alt = input.required<string>();
}
