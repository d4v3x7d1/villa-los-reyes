// services-data.ts

export interface ServiceItem {
  src: string;
  title: string;
  alt: string;
}

export interface ServicesContent {
  gastronomy: ServiceItem;
  mobility: ServiceItem;
  tripPlanner: ServiceItem;
  massages: ServiceItem;
  laundry: ServiceItem;
}

export const servicesContent: ServicesContent = {
  gastronomy: {
    title: "discoverServices.services.gastronomy.title",
    src: "/assets/images/restaurant/slide-dining-area-02.jpg",
    alt: "discoverServices.services.gastronomy.alt"
  },
  mobility: {
    title: "discoverServices.services.mobility.title",
    src: "/assets/images/vehicles/vehicle-01.jpg",
    alt: "discoverServices.services.mobility.alt"
  },
  tripPlanner: {
    title: "discoverServices.services.tripPlanner.title",
    src: "assets/images/amenities/slide-trip-planner.jpg",
    alt: "discoverServices.services.tripPlanner.alt"
  },
  massages: {
    title: "discoverServices.services.massages.title",
    src: "/assets/images/amenities/slide-massage.jpg",
    alt: "discoverServices.services.massages.alt"
  },
  laundry: {
    title: "discoverServices.services.laundry.title",
    src: "assets/images/amenities/slide-laundry.jpg",
    alt: "discoverServices.services.laundry.alt"
  },
};

