
const baseHead = {
  title: 'Nuestras habitaciones',
  description: 'Descubre servicios que harán de tu estancia una experiencia inolvidable.',
};


export const offers = [
  {
    background: '/assets/images/adventures/slide-horse-riding-02.jpg',
    title: 'Aventura Natural',
    subtitle: 'Paquetes en oferta',
    duration: '2 noches / 3 días',
    description:
      'Sumérgete en paisajes únicos, explora los mogotes, y disfruta de actividades al aire libre que te conectarán con la esencia rural de Cuba.',
    price: '00.00',
    currency: 'USD',
    perPerson: 'por persona',
    link: { text: 'DESCUBRE MÁS', url: '/aventuras/natural' },
  },

  {
    background: '/assets/images/adventures/slide-romance.jpg',
    title: 'Romance en Viñales',
    subtitle: 'Paquetes en oferta',
    duration: '2 noches / 3 días',
    description:
      'Déjate envolver por la magia de Viñales con un viaje romántico entre paisajes espectaculares, cenas íntimas y momentos de relajación inolvidables.',
    price: '250.00',
    currency: 'USD',
    perPerson: 'por persona',
    link: { text: 'DESCUBRE MÁS', url: '/paquetes/colonial' },
    transform: 'scale(1.28)',
    transformOrigin: '0% 50%',
  },

  {
    background: '/assets/images/adventures/slide-beach-02.jpg',
    title: 'Relax y Playa',
    subtitle: 'Paquetes en oferta',
    duration: '3 noches / 4 días',
    description:
      'Un paquete diseñado para quienes buscan un equilibrio entre la tranquilidad del campo y la belleza de las playas cercanas. Perfecto para familias o grupos que desean combinar descanso y diversión.',
    price: '180.00',
    currency: 'USD',
    perPerson: 'por pareja',
    link: { text: 'DESCUBRE MÁS', url: '/ofertas/romantica' },
  },

  {
    background: '/assets/images/adventures/slide-tobacco-farmer.jpg',
    title: 'Naturaleza y Tradición',
    subtitle: 'Paquetes en oferta',
    duration: '2 noches / 3 días',
    description:
      'Vive una experiencia única en Viñales, donde la naturaleza y la tradición se fusionan en momentos de romance, aventura y relajación inolvidables.',
    price: '350.00',
    currency: 'USD',
    perPerson: 'por habitación',
    link: {
      text: 'DESCUBRE MÁS',
      url: '/reservas/familiar',
    },
  },

  {
    background: '/assets/images/adventures/slide-sunset.jpg',
    title: 'Viñales en Familia',
    subtitle: 'Paquetes en oferta',
    duration: '4 noches / 5 días',
    description:
      'Diseñado especialmente para familias con niños, este paquete combina actividades educativas y recreativas que permitirán a todos disfrutar de una experiencia inolvidable en Viñales.',
    price: '350.00',
    currency: 'USD',
    perPerson: 'por persona',
    link: { text: 'DESCUBRE MÁS', url: '/reservas/familiar' },
  },
  {
    background: '/assets/images/adventures/slide-vinales-360.jpg',
    title: 'Viñales 360°',
    subtitle: 'Paquetes en oferta',
    duration: '3 noches / 4 días',
    description:
      'Descubre la esencia de Viñales en un recorrido único entre valles, tradiciones y sabores auténticos, con actividades que te conectarán con su naturaleza y cultura.',
    price: '00.00',
    currency: 'USD',
    perPerson: 'por persona',
    link: {
      text: 'DESCUBRE MÁS',
      url: '/ofertas/vinales-360',
    },
  }

];




export const rooms = [
    {
      src: '/assets/images/rooms/room-01/slide-01.jpg',
      alt: 'rooms.images.room1Alt',
      name: 'rooms.images.room1Name',
      details: 'rooms.images.room1Details',
      path: '/services-facilities/facilities/room-01'
    },
    {
      src: '/assets/images/rooms/room-02/slide-01.jpg',
      alt: 'rooms.images.room2Alt',
      name: 'rooms.images.room2Name',
      details: 'rooms.images.room2Details',
      path: '/services-facilities/facilities/room-02'
    },
    {
      src: '/assets/images/rooms/room-03/slide-06.jpg',
      alt: 'rooms.images.room3Alt',
      name: 'rooms.images.room3Name',
      details: 'rooms.images.room3Details',
      path: '/services-facilities/facilities/room-03'
    },
    {
      src: '/assets/images/rooms/room-04/slide-03.jpg',
      alt: 'rooms.images.room4Alt',
      name: 'rooms.images.room4Name',
      details: 'rooms.images.room4Details',
      path: '/services-facilities/facilities/room-04'
    },
    {
      src: '/assets/images/rooms/room-05/slide-02.jpg',
      alt: 'rooms.images.room5Alt',
      name: 'rooms.images.room5Name',
      details: 'rooms.images.room5Details',
      path: '/services-facilities/facilities/room-05'
    }
  ];





// ✅ 3. Datos de cada habitación
export const room01Data = {
  header: {
    head: baseHead,
    image: {
      src: '/assets/images/rooms/room-01/slide-03.jpg',
      alt: 'Habitación 1 - Villa Los Reyes',
    },
    objectPosition: '50% 40%',
  },
  gallery: {
    mainImage: { src: '/assets/images/rooms/room-01/slide-01.jpg', alt: '' },
    thumbImages: [
      { src: '/assets/images/rooms/room-01/slide-02.jpg', alt: '' },
      { src: '/assets/images/rooms/room-01/slide-03.jpg', alt: '' },
      { src: '/assets/images/rooms/room-01/slide-04.jpg', alt: '' },
    ],
    title: 'Habitación 1',
    description:
      'Disfruta de una estancia cómoda y relajante en nuestra amplia habitación, ideal para parejas, familias o grupos. Equipada con cómodas camas, aire acondicionado, baño privado y una decoración cálida con toques coloniales, esta habitación ofrece el equilibrio perfecto entre confort y autenticidad cubana.',
    featuresTitle: 'Esta habitación incluye:',
    features: [
      '2 camas matrimoniales',
      'Ropa de cama',
      'Split',
      'Ventilador',
      'Caja fuerte',
      'Baño privado',
      'Agua fría y caliente',
      'Secadora de pelo',
    ],
  },

  offer: offers[0]

};

export const room02Data = {
  header: {
    head: baseHead,
    image: {
      src: '/assets/images/rooms/room-02/slide-03.jpg',
      alt: 'Habitación 2 - Villa Los Reyes',
    },
    objectPosition: '50% 40%',
  },
  gallery: {
    mainImage: { src: '/assets/images/rooms/room-02/slide-01.jpg', alt: '' },
    thumbImages: [
      { src: '/assets/images/rooms/room-02/slide-02.jpg', alt: '' },
      { src: '/assets/images/rooms/room-02/slide-03.jpg', alt: '' },
      { src: '/assets/images/rooms/room-02/slide-04.jpg', alt: '' },
    ],
    title: 'Habitación 2',
    description:
      'Descubre nuestra amplia y luminosa habitación, ideal para familias o grupos. Con tres cómodas camas, esta habitación ofrece el ambiente perfecto para relajarse. Disfruta de la luz natural que entra por la gran ventana corrediza y de la hermosa vista al jardín exterior.',
    featuresTitle: 'Esta habitación incluye:',
    features: [
      '2 camas matrimoniales',
      '1 cama personal',
      'Ropa de cama',
      'Split',
      'Ventilador',
      'Caja fuerte',
      'Baño privado',
      'Agua fría y caliente',
      'Secadora de pelo'
    ],
  },
  offer: offers[1]
};

export const room03Data = {
  header: {
    head: baseHead,
    image: {
      src: '/assets/images/rooms/room-03/slide-05.jpg',
      alt: 'Habitación 3 - Villa Los Reyes',
    },
    objectPosition: 'center',
  },
  gallery: {
    mainImage: { src: '/assets/images/rooms/room-03/slide-01.jpg', alt: '' },
    thumbImages: [
      { src: '/assets/images/rooms/room-03/slide-02.jpg', alt: '' },
      { src: '/assets/images/rooms/room-03/slide-03.jpg', alt: '' },
      { src: '/assets/images/rooms/room-03/slide-04.jpg', alt: '' },

    ],
    title: 'Habitación 3',
    description:
      'Descansa en nuestra habitación, perfecta para relajarse tras un día de exploración. Esta habitación ofrece lo esencial para una estancia cómoda. Disfruta de la luz natural que ilumina el espacio y la tranquilidad que ofrece.',
    featuresTitle: 'Esta habitación incluye:',
    features: ['2 camas matrimoniales', 'Ropa de cama', 'Split', 'Ventilador', 'Caja fuerte', 'Baño privado', 'Agua fría y caliente', 'Secadora de pelo',],
  },
  offer: offers[2]
};

export const room04Data = {
  header: {
    head: baseHead,
    image: {
      src: '/assets/images/rooms/room-04/slide-01.jpg',
      alt: 'Habitación 4 - Villa Los Reyes',
    },
    objectPosition: 'center',
  },
  gallery: {
    mainImage: { src: '/assets/images/rooms/room-04/slide-01.jpg', alt: '' },
    thumbImages: [
      { src: '/assets/images/rooms/room-04/slide-02.jpg', alt: '' },
      { src: '/assets/images/rooms/room-04/slide-03.jpg', alt: '' },
      { src: '/assets/images/rooms/room-04/slide-04.jpg', alt: '' },

    ],
    title: 'Habitación Familiar',
    description: 'Espacio amplio con camas múltiples y zona de estar privada.',
    featuresTitle: 'Incluye:',
    features: [
      '3 camas matrimoniales',
      'Baño doble',
      'Wi-Fi',
      'Aire acondicionado',
      'Minibar',
    ],
    panelWidth: '600px',
    hasHostBg: false,
  },
  offer: offers[3]
};

export const room05Data = {
  header: {
    head: baseHead,
    image: {
      src: '/assets/images/rooms/room-05/slide-05.jpg',
      alt: 'Habitación 5 - Villa Los Reyes',
    },
    objectPosition: 'center',
  },
  gallery: {
    mainImage: { src: '/assets/images/rooms/room-05/slide-01.jpg', alt: '' },
    thumbImages: [
      { src: '/assets/images/rooms/room-05/slide-02.jpg', alt: '' },
      { src: '/assets/images/rooms/room-05/slide-03.jpg', alt: '' },
      { src: '/assets/images/rooms/room-05/slide-04.jpg', alt: '' },

    ],
    title: 'Suite',
    description: 'Sumérgete en una experiencia única en nuestra suite, diseñada para ofrecerte el equilibrio perfecto entre confort y estilo. Pensada especialmente para parejas, su atmósfera acogedora y su decoración elegante crean el entorno ideal para el descanso. La luz natural que inunda el espacio realza su calidez, invitándote a relajarte tras un día de exploración en Viñales.',
    featuresTitle: 'Esta habitación incluye:',
    features: [
      '1 cama king size',
      'Ropa de cama',
      'Split',
      'Ventilador',
      'Caja fuerte',
      'Baño privado',
      'Agua fría y caliente',
      'Secadora de pelo',

    ],
    panelWidth: '600px',
    hasHostBg: false,
  },
  offer: offers[4]
};

