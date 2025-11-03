import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'location-map',
  templateUrl: './location-map.html',
  styleUrls: ['./location-map.css']
})
export class LocationMap {
  safeMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url =
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12646.181147372738!2d-83.71814470930195!3d22.613867528379853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cb51356c77abad%3A0xce15618536e54315!2sVilla%20los%20reyes%20Casa%20Yarelis%20y%20Yoan!5e1!3m2!1ses-419!2sus!4v1760252195741!5m2!1ses-419!2sus';
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
