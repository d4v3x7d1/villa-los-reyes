import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'feature-list',
  imports: [TranslatePipe],
  templateUrl: './feature-list.html',
  styleUrl: './feature-list.css'
})
export class FeatureList {
   title = input.required<string>();
  features = input.required<string[]>()
}
