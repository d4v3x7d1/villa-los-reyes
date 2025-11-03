import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'button-nav',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './button-nav.html',
  styleUrl: './button-nav.css'
})
export class ButtonNavPage {

}
