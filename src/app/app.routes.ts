import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ServicesFacilitiesPage } from './pages/services-facilities-page/services-facilities-page';

import { FacilitiesPage } from './pages/facilities-page/facilities-page';
import { ServicesPage } from './pages/services-page/services-page';
import { ButtonNavPage } from './pages/button-nav/button-nav';
import { RoomBasePage } from './components/base-pages/room-base-page/room-base-page';
import { offers, room01Data, room02Data, room03Data, room04Data, room05Data } from './config/room-data';
import { ExperiencesPage } from './pages/experiences-page/experiences-page';
import { HorsebackRidingPage } from './pages/horseback-riding-page/horseback-riding-page';
import { HorsebackBasePage } from './components/base-pages/horseback-base-page/horseback-base-page';
import { HikingPage } from './pages/hiking-page/hiking-page';
import { OtherExperiencesPage } from './pages/other-experiences-page/other-experiences-page';
import { CycleToursPage } from './pages/cycle-tours-page/cycle-tours-page';
import { galleryAmazingSunrise, galleryAntiquityAndNature, galleryEcologicalAgriculture, galleryEnjoyingTheSunset, galleryFascinatingLandscape, galleryFromHellToParadise, galleryHistoryCultureNature, galleryHorseCarriage, galleryHorseRiding, galleryIntenseDay, galleryLakeVisit, galleryParadiseBeach, galleryPenitenceValley, galleryPureEcology, gallerySantoTomas, gallerySunsetRide, galleryTheCalvary, galleryTheSlipperyOne, galleryThroughTheValleys, galleryTobaccoInside, galleryTrueHiking, galleryVinalesDayTrip, galleryVinalesValley, headerExperience } from './config/experience-data';
import { DiscoverPackageDefaultAll } from './presets/discover-package-default-all/discover-package-default-all';
import { PackagesPage } from './pages/packages-page/packages-page';
import { PackageBasePage } from './components/base-pages/package-base-page/package-base-page';
import { ReviewsPage } from './pages/reviews-page/reviews-page';
import { ReviewsNewPage } from './pages/reviews-new-page/reviews-new-page';

export const routes: Routes = [
  // { path: '', component: ButtonNavPage, pathMatch: 'full' }, // '/' muestra solo la botonera
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },

  { path: 'services-facilities', component: ServicesFacilitiesPage },
  { path: 'services-facilities/facilities', component: FacilitiesPage },
  { path: 'services-facilities/services', component: ServicesPage },

  { path: 'services-facilities/facilities', component: FacilitiesPage },

  {
    path: 'services-facilities/facilities/room-01',
    component: RoomBasePage,
    data: room01Data,
  },
  {
    path: 'services-facilities/facilities/room-02',
    component: RoomBasePage,
    data: room02Data,
  },
  {
    path: 'services-facilities/facilities/room-03',
    component: RoomBasePage,
    data: room03Data,
  },
  {
    path: 'services-facilities/facilities/room-04',
    component: RoomBasePage,
    data: room04Data,
  },
  {
    path: 'services-facilities/facilities/room-05',
    component: RoomBasePage,
    data: room05Data,
  },

  {
    path: 'experiences', component: ExperiencesPage,
  },

  {
    path: 'experiences/horseback-riding', component: HorsebackRidingPage,
  },
  { path: 'experiences/hiking', component: HikingPage },

  { path: 'experiences/cycle-tours', component: CycleToursPage },

  { path: 'experiences/other', component: OtherExperiencesPage },

  {
    path: 'experiences/horseback-riding/mountain',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryHorseRiding,
      offer: offers[1],
    },
  },
  {
    path: 'experiences/horseback-riding/fascinating-landscape',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryFascinatingLandscape,
      offer: offers[2],
    },
  },
  {
    path: 'experiences/horseback-riding/sunset',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: gallerySunsetRide,
      offer: offers[3],
    },
  },

  {
    path: 'experiences/horseback-riding/penitence-valley',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryPenitenceValley,
      offer: offers[4],
    },
  },
  {
    path: 'experiences/horseback-riding/vinales-valley',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryVinalesValley,
      offer: offers[5],
    },
  },

  {
    path: 'experiences/hiking/from-hell-to-paradise',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryFromHellToParadise,
      offer: offers[0],
    },
  },
  {
    path: 'experiences/hiking/amazing-sunrise',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryAmazingSunrise,
      offer: offers[1],
    },
  },
  {
    path: 'experiences/hiking/enjoying-the-sunset',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryEnjoyingTheSunset,
      offer: offers[2],
    },
  },
  {
    path: 'experiences/hiking/true-hiking',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryTrueHiking,
      offer: offers[3],
    },
  },
  {
    path: 'experiences/hiking/antiquity-and-nature',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryAntiquityAndNature,
      offer: offers[4],
    },
  },
  {
    path: 'experiences/hiking/pure-ecology',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryPureEcology,
      offer: offers[5],
    },
  },
  {
    path: 'experiences/hiking/tobacco-inside',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryTobaccoInside,
      offer: offers[4],
    },
  },
  {
    path: 'experiences/cycle-tours/the-calvary',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryTheCalvary,
      offer: offers[0],
    },
  },
  {
    path: 'experiences/cycle-tours/the-slippery-one',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryTheSlipperyOne,
      offer: offers[1],
    },
  },

  {
    path: 'experiences/cycle-tours/through-the-valleys',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryThroughTheValleys,
      offer: offers[2],
    },
  },
  {
    path: 'experiences/cycle-tours/ecological-agriculture',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryEcologicalAgriculture,
      offer: offers[3],
    },
  },
  {
    path: 'experiences/cycle-tours/lake-visit',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryLakeVisit,
      offer: offers[4],
    },
  },
  {
    path: 'experiences/other/paradise-beach',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryParadiseBeach,
      offer: offers[0],
    },
  },
  {
    path: 'experiences/other/intense-day',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryIntenseDay,
      offer: offers[1],
    },
  },
  {
    path: 'experiences/other/santo-tomas-caves',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: gallerySantoTomas,
      offer: offers[2],
    },
  },
  {
    path: 'experiences/other/horse-carriage',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryHorseCarriage,
      offer: offers[3],
    },
  },
  {
    path: 'experiences/other/vinales-day-trip',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryVinalesDayTrip,
      offer: offers[4],
    },
  },
  {
    path: 'experiences/other/history-culture-and-nature',
    component: HorsebackBasePage,
    data: {
      header: headerExperience,
      gallery: galleryHistoryCultureNature,
      offer: offers[5],
    },

  },

  {
    path: 'nature',
    component: DiscoverPackageDefaultAll,
  },

  {
    path: 'packages',       // ← esta es la URL que se usará (ej: /packages)
    component: PackagesPage // ← el componente que se mostrará
  },

  // {
  //   path: 'reviews',
  //   component: ReviewsPage
  // },
  {
    path: 'PackageBasePage',
    component: PackageBasePage
  },

  {
    path: 'reviews',
    component: ReviewsNewPage
  },

  { path: '**', redirectTo: '/home' }
];
