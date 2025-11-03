import { Component } from '@angular/core';
import { InfoPanel } from "../../info-panel/info-panel";
import { LocationMap } from "../../location-map/location-map";

@Component({
  selector: 'location-section',
  imports: [InfoPanel, LocationMap],
  templateUrl: './location-section.html',
  styleUrls: ['./location-section.css']
})
export class LocationSection {}
