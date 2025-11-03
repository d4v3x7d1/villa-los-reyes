import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'info-panel',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './info-panel.html',
  styleUrl: './info-panel.css'
})



export class InfoPanel {
  title = input.required<string>();
  description = input.required<string>();
  link = input<{text:string,url:string}>();
}


