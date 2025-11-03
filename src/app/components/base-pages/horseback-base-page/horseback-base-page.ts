import { rooms } from './../../../config/room-data';
import { Component, input } from '@angular/core';
import { MainHeaderSection } from "../../sections/main-header-section/main-header-section";
import { GalleryInfoSection } from "../../sections/gallery-info-section/gallery-info-section";
import { RoomOfferSection } from "../../sections/room-offer-section/room-offer-section";
import { ExploreRoomsSection } from "../../sections/explore-rooms-section/explore-rooms-section";
import { ActivatedRoute } from '@angular/router';
import { OfferData } from '../room-base-page/room-base-page';
import { HexColor, UnitString, Position } from '../../shared/interfaces/app-interfaces';
import { rooms as roomsData} from '../../../config/room-data';

export interface HeaderData {
  title: string;
  description: string;
  image?: { src: string; alt: string };
  objectPosition: Position;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  mainImage: GalleryImage;
  thumbImages?: GalleryImage[];
  title: string;
  description: string;
  link?: { text: string; url: string };
  features?: string[];
  featuresTitle?: string;
  panelWidth?: string;
  reverse?: boolean;
  color: HexColor;
  hasHostBg: boolean;
  mainHeight?: UnitString;
  thumbHeight?: UnitString;
}

@Component({
  selector: 'app-horseback-base-page',
  imports: [MainHeaderSection, GalleryInfoSection, RoomOfferSection, ExploreRoomsSection],
  templateUrl: './horseback-base-page.html',
  styleUrl: './horseback-base-page.css'
})
export class HorsebackBasePage {

  // 🔸 Cada bloque puede venir por input o por route.data
  _header = input<HeaderData>();
  _gallery = input<GalleryData>();
  _offer = input<OfferData>();
  rooms = roomsData;

  constructor(private route: ActivatedRoute) {}

  get header(): HeaderData {
    return this._header() ?? this.route.snapshot.data['header'];
  }

  get gallery(): GalleryData {
    return this._gallery() ?? this.route.snapshot.data['gallery'];
  }

  get offer(): OfferData {
    return this._offer() ?? this.route.snapshot.data['offer'];
  }
}
