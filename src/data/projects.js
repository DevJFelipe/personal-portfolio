import milpasoHero from '../assets/projects/milpaso-hero.webp'
import milpasoHow from '../assets/projects/milpaso-how.webp'
import calkoTrace from '../assets/projects/calko-01-trace.webp'
import calkoStaysPut from '../assets/projects/calko-02-stays-put.webp'
import calkoStyles from '../assets/projects/calko-03-styles.webp'
import calkoLayers from '../assets/projects/calko-04-layers.webp'
import calkoLightbox from '../assets/projects/calko-05-lightbox.webp'
import calkoTemplates from '../assets/projects/calko-06-templates.webp'
import calkoIcon from '../assets/projects/calko-icon.webp'
import skillionProfile from '../assets/projects/skillion-01-profile.webp'
import skillionRewards from '../assets/projects/skillion-02-rewards.webp'
import skillionTime from '../assets/projects/skillion-03-time.webp'
import skillionToday from '../assets/projects/skillion-04-today.webp'
import skillionDestiny from '../assets/projects/skillion-05-destiny.webp'
import skillionAvatar from '../assets/projects/skillion-06-avatar.webp'
import skillionIcon from '../assets/projects/skillion-icon.webp'
import playground from '../assets/projects/playground.webp'

/*
  Every project uses the same shape. Text fields are { es, en }.
  Sources: CV, App Store listing, milpaso.app, the repositories' READMEs and,
  for Oasis, the signed proposal (without prices or names).
*/
export const projects = [
  {
    slug: 'milpaso',
    name: 'Milpaso',
    featured: true,
    tagline: { es: 'Tus pasos riegan tu granja', en: 'Your steps water your farm' },
    summary: {
      es: 'Juego cozy de granja pixel: cada paso real que das se vuelve agua para tus cultivos. Sin anuncios y sin cuenta obligatoria.',
      en: 'A cozy pixel farming game: every real step you take becomes water for your crops. No ads and no account required.',
    },
    year: '2026',
    kind: 'product',
    status: 'live',
    categories: ['mobile'],
    platforms: { es: 'Android, con iOS muy pronto', en: 'Android, with iOS coming soon' },
    role: { es: 'Fundador y desarrollador', en: 'Founder and developer' },
    stack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'RevenueCat', 'PostHog', 'Sentry'],
    links: {
      website: 'https://milpaso.app',
      googlePlay: 'https://play.google.com/store/apps/details?id=app.milpaso.milpaso',
      appStoreSoon: true,
    },
    media: {
      type: 'screens',
      images: [
        {
          src: milpasoHero,
          width: 1454,
          height: 780,
          alt: {
            es: 'Página de inicio de milpaso.app: granja pixel con cultivos, una casa y Capi, el carpincho.',
            en: 'The milpaso.app home page: a pixel farm with crops, a house and Capi the capybara.',
          },
        },
        {
          src: milpasoHow,
          width: 1454,
          height: 780,
          alt: {
            es: 'Sección «Así funciona» de milpaso.app: camina, riega y cosecha.',
            en: 'The «How it works» section on milpaso.app: walk, water and harvest.',
          },
        },
      ],
    },
    sections: [
      {
        title: { es: 'La idea', en: 'The idea' },
        body: {
          es: [
            'Milpaso convierte la caminata diaria en el motor de un juego tranquilo. El teléfono cuenta tus pasos aunque la app esté cerrada y cada paso queda guardado como una gota de agua para tu granja.',
            'No hay cronómetros ni energía que comprar: la única energía del juego son tus pasos. Si un día no caminas, nada muere; la granja duerme.',
          ],
          en: [
            "Milpaso turns your daily walk into the engine of a calm game. Your phone counts steps even when the app is closed, and every step is saved as a drop of water for your farm.",
            "There are no timers and no energy to buy: your steps are the only energy in the game. If you skip a day, nothing dies; the farm just sleeps.",
          ],
        },
      },
      {
        title: { es: 'Cómo se juega', en: 'How it plays' },
        list: {
          es: [
            'Camina: el contador de pasos del teléfono trabaja en segundo plano.',
            'Riega: dos minutos al día en la app para recoger las gotas y regar tus parcelas.',
            'Cosecha: lo que madura entra a tu álbum y te da monedas para semillas nuevas y decoración.',
          ],
          en: [
            "Walk: the phone's step counter works in the background.",
            'Water: two minutes a day in the app to collect your drops and water your plots.',
            'Harvest: whatever ripens goes into your album and earns coins for new seeds and decorations.',
          ],
        },
      },
      {
        title: { es: 'Ingeniería', en: 'Engineering' },
        body: {
          es: [
            'La app está hecha en Flutter con Riverpod y está en español e inglés. Firebase (Auth y Firestore) guarda la copia de la partida en la nube, que se puede apagar desde Ajustes; RevenueCat maneja las compras, PostHog mide el uso de forma anónima y Sentry reporta los errores.',
            'La lógica del juego tiene su propio verificador: un oráculo en Python con vectores de aceptación y pruebas de propiedad, y un chequeo de mutación que rompe esa lógica a propósito y exige que las pruebas lo detecten. Una suite verde que no puede ponerse roja no prueba nada.',
            'Para desarrollar sin salir a caminar, una fuente de pasos simulada reemplaza al sensor; en las versiones publicadas no tiene ningún efecto.',
          ],
          en: [
            'The app is built in Flutter with Riverpod and ships in Spanish and English. Firebase (Auth and Firestore) keeps the cloud save, which can be turned off in Settings; RevenueCat handles purchases, PostHog measures usage anonymously and Sentry reports errors.',
            "The game logic has its own verifier: a Python oracle with acceptance vectors and property tests, plus a mutation check that breaks that logic on purpose and requires the tests to catch it. A green suite that can't turn red proves nothing.",
            'To develop without going for a walk, a simulated step source replaces the sensor; in published builds it has no effect.',
          ],
        },
      },
      {
        title: { es: 'Estado', en: 'Status' },
        body: {
          es: 'Disponible gratis en Google Play. La versión para iPhone llega muy pronto a la App Store.',
          en: 'Free on Google Play. The iPhone version is coming soon to the App Store.',
        },
      },
    ],
  },

  {
    slug: 'calko',
    name: 'Calko',
    featured: true,
    tagline: { es: 'Calca cualquier foto sobre papel', en: 'Trace any photo onto paper' },
    summary: {
      es: 'App de calco con realidad aumentada: apoyas el teléfono sobre un vaso, eliges una imagen y sigues la guía con tu lápiz. Sin conexión, sin cuenta y sin anuncios.',
      en: 'An AR tracing app: rest your phone on a glass, pick an image and follow the guide with your pencil. Offline, with no account and no ads.',
    },
    year: '2026',
    kind: 'product',
    status: 'live',
    categories: ['mobile'],
    platforms: { es: 'iPhone y iPad, con Android muy pronto', en: 'iPhone and iPad, with Android coming soon' },
    role: { es: 'Creador: diseño y desarrollo', en: 'Creator: design and development' },
    stack: ['Flutter', 'Dart', 'Riverpod', 'go_router', 'Drift', 'Freezed', 'GLSL shaders', { es: 'Compras dentro de la app', en: 'In-app purchases' }],
    links: {
      appStore: 'https://apps.apple.com/us/app/calko-ar-trace-sketch/id6815786350',
      googlePlaySoon: true,
    },
    media: {
      type: 'phones',
      icon: calkoIcon,
      images: [
        { src: calkoTrace, alt: { es: 'Calko muestra la guía de un colibrí sobre la hoja y el lápiz siguiéndola.', en: 'Calko shows a hummingbird guide over the paper with the pencil following it.' } },
        { src: calkoStaysPut, alt: { es: 'La guía bloqueada con cinta: ningún toque la mueve.', en: 'The guide locked with tape: no touch moves it.' } },
        { src: calkoStyles, alt: { es: 'Selector de estilos: original, líneas, luz y sombra, sombreado.', en: 'Style picker: original, lines, light and shadow, hatching.' } },
        { src: calkoLayers, alt: { es: 'Calco por capas: contorno, detalles y sombras.', en: 'Tracing in layers: outline, details and shadows.' } },
        { src: calkoLightbox, alt: { es: 'Modo mesa de luz con la pantalla al máximo brillo.', en: 'Lightbox mode with the screen at full brightness.' } },
        { src: calkoTemplates, alt: { es: 'Biblioteca de plantillas: animales, flores y letras.', en: 'Template library: animals, flowers and lettering.' } },
      ],
    },
    sections: [
      {
        title: { es: 'Qué hace', en: 'What it does' },
        body: {
          es: [
            'La cámara muestra tu papel con la guía encima, así ves tu propio trazo mientras dibujas. Sirve para bocetos, retratos de mascotas, letreros, diseños de tatuaje o plantillas, y para aprender a dibujar practicando.',
            'Lo básico es gratis para siempre y sin anuncios. Calko Pro es un pago único dentro de la app.',
          ],
          en: [
            'The camera shows your paper with the guide on top, so you see your own line as you draw. It works for sketches, pet portraits, signs, tattoo or stencil designs, and for learning to draw by practicing.',
            'The basics are free forever, with no ads. Calko Pro is a one-time in-app purchase.',
          ],
        },
      },
      {
        title: { es: 'Funciones', en: 'Features' },
        list: {
          es: [
            'La guía se bloquea con cinta: mientras está bloqueada ningún gesto la mueve, y la app recuerda dónde la dejaste.',
            'Nueve estilos, de líneas limpias a luz y sombra, sombreado con líneas, puntillismo, plantilla y pintura por números.',
            'Calco por capas: primero el contorno, luego los detalles y al final las sombras.',
            'Quita el fondo de una foto en el propio teléfono, sin subirla a ningún servidor.',
            'Modo mesa de luz: pones papel fino sobre la pantalla y calcas sin cámara.',
            '160 plantillas que funcionan sin conexión.',
          ],
          en: [
            'The guide locks with tape: while locked no gesture can move it, and the app remembers where you left it.',
            'Nine styles, from clean lines to light and shadow, hatching, stippling, stencil and paint by numbers.',
            'Trace in layers: the outline first, then the details and the shadows last.',
            'Removes a photo background on the phone itself, without uploading it anywhere.',
            'Lightbox mode: lay thin paper on the screen and trace without the camera.',
            '160 templates that work offline.',
          ],
        },
      },
      {
        title: { es: 'Ingeniería', en: 'Engineering' },
        body: {
          es: [
            'Hecha en Flutter con Riverpod, go_router, Freezed y Drift. Los estilos de imagen se procesan en la GPU con shaders de fragmentos propios (bordes, dilatación, sombreado y filtro Kuwahara), y la eliminación de fondo corre en el dispositivo: las fotos nunca salen del teléfono.',
            'El diseño lo hice en Figma y la app está en español e inglés.',
          ],
          en: [
            "Built in Flutter with Riverpod, go_router, Freezed and Drift. Image styles run on the GPU through custom fragment shaders (edges, dilation, hatching and a Kuwahara filter), and background removal runs on the device: photos never leave the phone.",
            'I designed it in Figma, and the app is available in Spanish and English.',
          ],
        },
      },
      {
        title: { es: 'Estado', en: 'Status' },
        body: {
          es: 'Disponible gratis en la App Store desde noviembre de 2026. La versión para Android llega pronto a Google Play.',
          en: 'Free on the App Store since November 2026. The Android version is coming soon to Google Play.',
        },
      },
    ],
  },

  {
    slug: 'oasis',
    name: 'Oasis Tienda de Belleza',
    shortName: 'Oasis',
    featured: true,
    tagline: { es: 'Tienda virtual en Shopify', en: 'Shopify online store' },
    summary: {
      es: 'Tienda en línea para una tienda de belleza de Neiva: pagos con tarjeta, PSE y Nequi, inventario conectado con Siigo y un botón de WhatsApp en cada producto.',
      en: 'Online store for a beauty retailer in Neiva: payments by card, PSE and Nequi, inventory synced with Siigo and a WhatsApp button on every product.',
    },
    year: '2026',
    kind: 'client',
    status: 'building',
    categories: ['web'],
    platforms: { es: 'Web, pensada primero para el celular', en: 'Web, designed mobile-first' },
    role: { es: 'Diseño y desarrollo (freelance)', en: 'Design and development (freelance)' },
    stack: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'Wompi', 'Siigo'],
    links: {},
    media: { type: 'art', art: 'oasis' },
    sections: [
      {
        title: { es: 'El encargo', en: 'The brief' },
        body: {
          es: [
            'Oasis quería vender en línea sin perder lo que ya le funciona en el almacén: la asesoría por WhatsApp y el inventario en Siigo. El diseño parte de su logo y sus colores y está pensado primero para el celular.',
          ],
          en: [
            'Oasis wanted to sell online without losing what already works in the store: advice over WhatsApp and inventory in Siigo. The design starts from its logo and colors and is built mobile-first.',
          ],
        },
      },
      {
        title: { es: 'Qué incluye', en: 'What it includes' },
        list: {
          es: [
            'Catálogo con fotografía uniforme de los 100 productos más vendidos, organizado por categorías, marcas y colecciones.',
            'Pagos con tarjeta, PSE, Nequi y transferencia a través de Wompi, compras a cuotas con Sistecrédito y pago contraentrega.',
            'Inventario y facturación conectados con Siigo: lo que se agota en el almacén aparece agotado en la tienda.',
            'Botón «Preguntar por WhatsApp» en cada producto, con el nombre y el enlace ya escritos en el mensaje.',
            'Test de cabello que recomienda productos, reseñas de clientes y catálogo conectado con Instagram, Facebook y Google.',
          ],
          en: [
            'A catalog with consistent photography of the 100 best-selling products, organized by category, brand and collection.',
            'Payments by card, PSE, Nequi and bank transfer through Wompi, installment purchases with Sistecrédito and cash on delivery.',
            'Inventory and invoicing synced with Siigo: whatever sells out in the store shows as sold out online.',
            'An «Ask on WhatsApp» button on every product, with the product name and link already in the message.',
            'A hair quiz that recommends products, customer reviews and a catalog connected to Instagram, Facebook and Google.',
          ],
        },
      },
      {
        title: { es: 'Estado', en: 'Status' },
        body: {
          es: 'En desarrollo. El lanzamiento está previsto para diciembre de 2026.',
          en: 'In progress. Launch is planned for December 2026.',
        },
      },
    ],
  },

  {
    slug: 'skillion',
    name: 'Skillion',
    featured: true,
    tagline: { es: 'App móvil gamificada', en: 'Gamified mobile app' },
    summary: {
      es: 'Startup de apps móviles que cofundé. Diseñé la arquitectura y desarrollé desde cero una app gamificada para iOS y Android.',
      en: 'A mobile app startup I co-founded. I designed the architecture and built a gamified app for iOS and Android from scratch.',
    },
    year: '2025–2026',
    kind: 'startup',
    status: 'live',
    categories: ['mobile'],
    platforms: { es: 'iOS y Android', en: 'iOS and Android' },
    role: { es: 'Cofundador y líder técnico', en: 'Co-founder and lead developer' },
    stack: ['Flutter', 'Dart', 'Riverpod', 'Drift', 'Clean Architecture', 'Mixpanel', 'Firebase Analytics'],
    links: {
      website: 'https://skillion.app',
      appStore: 'https://apps.apple.com/us/app/skillion-gamify-your-life/id6752905262',
      googlePlay: 'https://play.google.com/store/apps/details?id=app.skillion',
    },
    media: {
      type: 'phones',
      icon: skillionIcon,
      images: [
        { src: skillionProfile, alt: { es: 'Perfil del jugador con su nivel, las barras de experiencia, vida y energía, y sus tres habilidades principales.', en: 'Player profile with level, XP, health and energy bars, and the top three skills.' } },
        { src: skillionRewards, alt: { es: 'Tienda de recompensas: las monedas se cambian por premios que pone el propio usuario.', en: 'Rewards store: coins are traded for rewards the user sets.' } },
        { src: skillionTime, alt: { es: 'El día en un reloj de 24 horas, con bloques de tiempo enlazados a tareas.', en: 'The day on a 24-hour clock, with time blocks linked to tasks.' } },
        { src: skillionToday, alt: { es: 'Tareas del día: cada una suma experiencia a una habilidad y puede dar un golpe crítico.', en: "Today's tasks: each one adds XP to a skill and can land a critical hit." } },
        { src: skillionDestiny, alt: { es: 'La Tarea del Destino elige qué hacer, con monedas en juego.', en: 'Task of Destiny picks what to do, with coins at stake.' } },
        { src: skillionAvatar, alt: { es: 'Avatar en pixel art personalizable y temas de color de la app.', en: 'Customizable pixel-art avatar and app color themes.' } },
      ],
    },
    sections: [
      {
        title: { es: 'La app', en: 'The app' },
        body: {
          es: 'Skillion convierte las tareas y los hábitos en un juego de rol. El usuario crea las habilidades que quiere subir, cada tarea cumplida les da experiencia y monedas, y con esas monedas se da los premios que él mismo elige. Está en español e inglés.',
          en: 'Skillion turns tasks and habits into a role-playing game. Users create the skills they want to level up, every completed task gives those skills XP and coins, and the coins buy rewards they choose themselves. It is available in English and Spanish.',
        },
      },
      {
        title: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Entre junio de 2025 y octubre de 2026 fui cofundador y líder técnico de Skillion Studios. Definí la arquitectura, prioricé el backlog y lideré el roadmap técnico, buscando el equilibrio entre velocidad de entrega y calidad del código.',
          en: 'From June 2025 to October 2026 I was co-founder and lead developer of Skillion Studios. I defined the architecture, prioritized the backlog and led the technical roadmap, balancing delivery speed with code quality.',
        },
      },
      {
        title: { es: 'Qué construí', en: 'What I built' },
        list: {
          es: [
            'Una app gamificada desde cero con Flutter y Clean Architecture, pensada para iterar rápido sobre el producto.',
            'Riverpod para el estado y Drift para la persistencia local, optimizada para que la app se sintiera fluida en iOS y Android.',
            'Mixpanel y Firebase Analytics para medir eventos y retención, y tomar decisiones de producto con datos.',
            'Flujos de UX y estética pixel art, llevando mecánicas de RPG a una experiencia móvil sencilla.',
          ],
          en: [
            'A gamified app built from scratch with Flutter and Clean Architecture, designed for fast product iteration.',
            'Riverpod for state and Drift for local persistence, tuned so the app felt smooth on iOS and Android.',
            'Mixpanel and Firebase Analytics to track events and retention and make product decisions with data.',
            'UX flows and a pixel-art look, bringing RPG mechanics into a simple mobile experience.',
          ],
        },
      },
    ],
  },

  {
    slug: 'deteccion-vial',
    name: { es: 'Detección vial con visión artificial', en: 'Road damage detection' },
    tagline: { es: 'Huecos y grietas detectados en tiempo real', en: 'Potholes and cracks detected in real time' },
    summary: {
      es: 'Investigación en la Universidad Surcolombiana: una app que detecta huecos y grietas en la vía con YOLOv8n y los ubica en un mapa.',
      en: 'Research at Universidad Surcolombiana: an app that detects potholes and cracks with YOLOv8n and places them on a map.',
    },
    year: '2025',
    kind: 'research',
    status: 'done',
    categories: ['mobile', 'ai'],
    platforms: { es: 'Android', en: 'Android' },
    role: { es: 'Coautor y desarrollador', en: 'Co-author and developer' },
    stack: ['Flutter', 'YOLOv8n', 'TensorFlow Lite', 'SQLite', 'Google Maps', 'BLoC'],
    links: {
      github: [{ label: 'deteccion-vial-app', url: 'https://github.com/DevJFelipe/deteccion-vial-app' }],
    },
    media: { type: 'art', art: 'road' },
    sections: [
      {
        title: { es: 'El proyecto', en: 'The project' },
        body: {
          es: 'Sistema de detección y georreferenciación de anomalías viales que corre en el propio teléfono. Lo desarrollé con Linda Valentina López Rubiano, bajo la dirección del ingeniero Ferley Medina Rojas.',
          en: 'A system that detects and geotags road damage on the phone itself. I built it with Linda Valentina López Rubiano, supervised by engineer Ferley Medina Rojas.',
        },
      },
      {
        title: { es: 'Cómo funciona', en: 'How it works' },
        list: {
          es: [
            'Modelo YOLOv8n cuantizado a int8 y ejecutado con TensorFlow Lite en el dispositivo.',
            'Cada detección se georreferencia con GPS, con una precisión de 10 metros o mejor.',
            'Las detecciones se guardan en SQLite y se ven en un mapa interactivo con Google Maps.',
            'Clean Architecture con BLoC para separar la cámara, el modelo y la interfaz.',
          ],
          en: [
            'A YOLOv8n model quantized to int8 and run with TensorFlow Lite on the device.',
            'Each detection is geotagged by GPS, accurate to 10 meters or better.',
            'Detections are stored in SQLite and shown on an interactive Google Maps view.',
            'Clean Architecture with BLoC keeps the camera, the model and the UI apart.',
          ],
        },
      },
      {
        title: { es: 'Metas de rendimiento', en: 'Performance targets' },
        body: {
          es: 'El sistema se diseñó para al menos 15 cuadros por segundo en el dispositivo, una latencia de inferencia de 200 ms o menos y un mAP@0.5 de 81,6 % o más.',
          en: 'The system was designed for at least 15 frames per second on the device, inference latency of 200 ms or less and an mAP@0.5 of 81.6% or higher.',
        },
      },
    ],
  },

  {
    slug: 'iidta',
    name: 'IIDTA',
    tagline: { es: 'Detección temprana de trastornos del aprendizaje', en: 'Early detection of learning disorders' },
    summary: {
      es: 'Plataforma web para detectar a tiempo dislexia, discalculia y TDAH, para la Universidad Surcolombiana y la UDES. Desarrollo sus 90 videojuegos educativos.',
      en: 'Web platform for early detection of dyslexia, dyscalculia and ADHD, for Universidad Surcolombiana and UDES. I develop its 90 educational games.',
    },
    year: '2026',
    kind: 'research',
    status: 'building',
    categories: ['web'],
    platforms: { es: 'Web', en: 'Web' },
    role: { es: 'Desarrollo de videojuegos', en: 'Game development' },
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Turborepo', 'pnpm'],
    links: {
      github: [{ label: 'iidta-platform', url: 'https://github.com/DevJFelipe/iidta-platform' }],
    },
    media: { type: 'art', art: 'iidta' },
    sections: [
      {
        title: { es: 'El proyecto', en: 'The project' },
        body: {
          es: 'La plataforma tiene un piloto institucional previsto para el segundo semestre de 2026. Los 90 retos se reparten en tres niveles de 30 juegos: primaria (6 a 11 años), secundaria (11 a 15) y media (15 a 18).',
          en: 'The platform has an institutional pilot planned for the second half of 2026. Its 90 challenges are split into three levels of 30 games: primary (ages 6 to 11), lower secondary (11 to 15) and upper secondary (15 to 18).',
        },
      },
      {
        title: { es: 'Arquitectura', en: 'Architecture' },
        body: {
          es: 'Monorepo con Turborepo y pnpm: una app en Next.js 14 con App Router y TypeScript estricto, y paquetes compartidos para el motor de juego, la telemetría y la puntuación, los juegos de cada nivel y la interfaz.',
          en: 'A Turborepo and pnpm monorepo: a Next.js 14 App Router app in strict TypeScript, with shared packages for the game engine, telemetry and scoring, the games for each level and the UI.',
        },
      },
    ],
  },

  {
    slug: 'sigma',
    name: 'SIGMA',
    tagline: { es: 'Maquinaria agrícola y nómina para Inmero', en: 'Farm machinery and payroll for Inmero' },
    summary: {
      es: 'Backend principal de la plataforma de Inmero: maquinaria con telemetría IoT, mantenimiento y nómina, en Django REST Framework con Docker y PostgreSQL.',
      en: "Main backend of Inmero's platform: machinery with IoT telemetry, maintenance and payroll, in Django REST Framework with Docker and PostgreSQL.",
    },
    year: '2025',
    kind: 'company',
    status: 'done',
    categories: ['backend'],
    platforms: { es: 'API y servicios', en: 'API and services' },
    role: { es: 'Desarrollador backend', en: 'Backend developer' },
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'Docker', 'Firebase'],
    links: {
      github: [{ label: 'SIGMA_backend', url: 'https://github.com/Server-IA/SIGMA_backend' }],
    },
    media: { type: 'art', art: 'sigma' },
    sections: [
      {
        title: { es: 'Qué hace', en: 'What it does' },
        body: {
          es: 'Es el servicio central del sistema: guarda los datos y expone los módulos de maquinaria, mantenimiento y nómina. Recibe la telemetría de los rastreadores GPS de la maquinaria por medio de un decodificador propio y se conecta con un servicio de auditoría y con facturación electrónica.',
          en: "It's the system's core service: it stores the data and exposes the machinery, maintenance and payroll modules. It receives telemetry from the machines' GPS trackers through a dedicated decoder and connects to an audit service and to electronic invoicing.",
        },
      },
      {
        title: { es: 'Cómo se trabajó', en: 'How we worked' },
        list: {
          es: [
            'Arquitectura por capas: dominio, transformación de datos, lógica de negocio y API.',
            'Flujo de ramas de desarrollo a QA y luego a despliegue, con pruebas antes de cada paso.',
            'Contenedores Docker y despliegues semanales bajo SCRUM.',
          ],
          en: [
            'Layered architecture: domain, data transformation, business logic and API.',
            'A branch flow from development to QA and then to deployment, with tests before each step.',
            'Docker containers and weekly deployments under SCRUM.',
          ],
        },
      },
    ],
  },

  {
    slug: 'residence',
    name: 'Residence App',
    tagline: { es: 'Gestión de conjuntos residenciales', en: 'Residential complex management' },
    summary: {
      es: 'App en Flutter para administrar conjuntos: residentes, facturación, PQRS, visitantes y reservas de zonas comunes, con vistas distintas para administración y residentes.',
      en: 'A Flutter app for running residential complexes: residents, billing, requests and complaints, visitors and amenity bookings, with separate views for managers and residents.',
    },
    year: '2026',
    kind: 'team',
    status: 'done',
    categories: ['mobile'],
    platforms: { es: 'iOS y Android', en: 'iOS and Android' },
    role: { es: 'Desarrollador de la app móvil', en: 'Mobile app developer' },
    stack: ['Flutter', 'Dart', 'FastAPI', 'JWT'],
    links: {
      github: [{ label: 'residence-app', url: 'https://github.com/DevJFelipe/residence-app' }],
    },
    media: { type: 'art', art: 'residence' },
    sections: [
      {
        title: { es: 'Para la administración', en: 'For managers' },
        list: {
          es: [
            'Tablero con ocupación, pagos pendientes y PQRS abiertas.',
            'Residentes y propiedades, con asignación de unidades.',
            'Facturas filtradas por estado de pago y detalle de cobros.',
            'Gestión completa de PQRS: estado, prioridad, resolución y comentarios.',
            'Registro de entrada y salida de visitantes y reservas de zonas comunes.',
          ],
          en: [
            'A dashboard with occupancy, pending payments and open requests.',
            'Residents and properties, with unit assignment.',
            'Invoices filtered by payment status, with charge details.',
            'Full request handling: status, priority, resolution and comments.',
            'Visitor check-in and check-out and amenity bookings.',
          ],
        },
      },
      {
        title: { es: 'Para los residentes', en: 'For residents' },
        list: {
          es: [
            'Inicio con pagos pendientes, próximas reservas y notificaciones.',
            'Reservas de zonas comunes e historial.',
            'Registro previo de visitantes y seguimiento de su estado.',
            'Creación y seguimiento de peticiones, quejas, reclamos y sugerencias.',
          ],
          en: [
            'A home view with pending payments, upcoming bookings and notifications.',
            'Amenity bookings and their history.',
            'Visitor pre-registration and status tracking.',
            'Creating and tracking requests, complaints and suggestions.',
          ],
        },
      },
      {
        title: { es: 'Acceso', en: 'Access' },
        body: {
          es: 'Inicio de sesión con verificación por código enviado al correo, sesión con JWT y rutas según el rol. El backend en FastAPI lo construyó otro integrante del equipo.',
          en: 'Sign-in with a code sent by email, JWT sessions and role-based routing. Another team member built the FastAPI backend.',
        },
      },
    ],
  },

  {
    slug: 'cacao',
    name: { es: 'Precio del cacao', en: 'Cocoa price forecasting' },
    tagline: { es: 'Series de tiempo aplicadas al cacao', en: 'Time series applied to cocoa' },
    summary: {
      es: 'App en Flutter con pronósticos del precio del cacao en USD por tonelada y COP por kilo, y un modelo SARIMAX que predice el clima según el ciclo del cultivo.',
      en: 'A Flutter app with cocoa price forecasts in USD per tonne and COP per kilo, plus a SARIMAX model that forecasts climate along the crop cycle.',
    },
    year: '2025',
    kind: 'research',
    status: 'done',
    categories: ['mobile', 'ai'],
    platforms: { es: 'Android', en: 'Android' },
    role: { es: 'Desarrollador e investigador', en: 'Developer and researcher' },
    stack: ['Flutter', 'Dart', 'Python', 'statsmodels', 'pandas', 'LaTeX'],
    links: {
      github: [
        { label: { es: 'App móvil', en: 'Mobile app' }, url: 'https://github.com/DevJFelipe/cocoa-price-prediction-mobile-app' },
        { label: { es: 'Modelo SARIMAX', en: 'SARIMAX model' }, url: 'https://github.com/DevJFelipe/modelo_cacao_clima_sarimax' },
        { label: { es: 'Artículo en LaTeX', en: 'LaTeX article' }, url: 'https://github.com/DevJFelipe/cocoa-price-forecast-latex-article' },
      ],
    },
    media: { type: 'art', art: 'cacao' },
    sections: [
      {
        title: { es: 'La app', en: 'The app' },
        body: {
          es: 'Muestra pronósticos globales del precio del cacao para 2025 a 2027 y predicciones por país para los principales exportadores, en dólares por tonelada y en pesos por kilo.',
          en: 'It shows global cocoa price forecasts for 2025 to 2027 and per-country predictions for the main exporters, in dollars per tonne and in pesos per kilo.',
        },
      },
      {
        title: { es: 'El modelo', en: 'The model' },
        body: {
          es: 'Un modelo SARIMAX predice temperatura y precipitación usando como variables exógenas el ciclo vegetativo del cacao: floración, desarrollo del fruto y cosecha. Genera predicciones a 24 meses con recomendaciones para el cultivo, y el proceso quedó documentado en un artículo escrito en LaTeX.',
          en: 'A SARIMAX model forecasts temperature and rainfall using the cocoa growth cycle as exogenous variables: flowering, fruit development and harvest. It produces 24-month forecasts with crop recommendations, and the process is documented in an article written in LaTeX.',
        },
      },
    ],
  },

  {
    slug: 'fitnow',
    name: 'FitNow',
    tagline: { es: 'Rutinas de gimnasio generadas con IA', en: 'AI-generated gym routines' },
    summary: {
      es: 'Proyecto académico: una API en Spring Boot que genera rutinas de gimnasio con la API de OpenAI y redujo en 70 % el tiempo de crear planes a mano.',
      en: 'Academic project: a Spring Boot API that generates gym routines with the OpenAI API, cutting manual plan creation time by 70%.',
    },
    year: '2023',
    kind: 'academic',
    status: 'done',
    categories: ['backend', 'ai'],
    platforms: { es: 'API REST', en: 'REST API' },
    role: { es: 'Desarrollador backend', en: 'Backend developer' },
    stack: ['Java', 'Spring Boot', 'OpenAI API', 'PostgreSQL', 'Azure'],
    links: {
      github: [{ label: 'FitNow-Backend', url: 'https://github.com/DevJFelipe/FitNow-Backend' }],
    },
    media: { type: 'art', art: 'fitnow' },
    sections: [
      {
        title: { es: 'Resultado', en: 'Outcome' },
        list: {
          es: [
            'Generador de rutinas con la API de OpenAI que redujo en 70 % el tiempo de crear planes de entrenamiento a mano.',
            'API REST desplegada en Azure con PostgreSQL, con 99,9 % de disponibilidad en pruebas de carga.',
          ],
          en: [
            'A routine generator on the OpenAI API that cut manual training-plan creation time by 70%.',
            'A REST API deployed on Azure with PostgreSQL, reaching 99.9% availability under load testing.',
          ],
        },
      },
    ],
  },

  {
    slug: 'playground',
    name: 'PlayGround',
    tagline: { es: 'Reserva de canchas deportivas', en: 'Sports court booking' },
    summary: {
      es: 'Aplicación web para buscar canchas, reservarlas y gestionar las reservas, con un panel de administración para crear y editar canchas.',
      en: 'A web app to find courts, book them and manage bookings, with an admin panel to create and edit courts.',
    },
    year: '2024',
    kind: 'team',
    status: 'done',
    categories: ['web'],
    platforms: { es: 'Web', en: 'Web' },
    role: { es: 'Desarrollador frontend', en: 'Frontend developer' },
    stack: ['React', 'NextUI', 'Tailwind CSS', 'React Router', 'Leaflet'],
    links: {
      github: [{ label: 'web-admin-canchas', url: 'https://github.com/DevJFelipe/web-admin-canchas' }],
    },
    media: {
      type: 'screens',
      images: [
        {
          src: playground,
          width: 1200,
          height: 853,
          alt: {
            es: 'Página de inicio de PlayGround: «Reserva tu cancha al instante» con un buscador de canchas.',
            en: 'The PlayGround home page: «Book your court instantly» with a court search bar.',
          },
        },
      ],
    },
    sections: [
      {
        title: { es: 'Qué hace', en: 'What it does' },
        list: {
          es: [
            'Búsqueda de canchas y vista de detalle con ubicación en el mapa.',
            'Reserva, confirmación y lista de canchas reservadas por cada usuario.',
            'Registro, inicio de sesión y rutas protegidas.',
            'Panel de administración para crear, editar y eliminar canchas.',
          ],
          en: [
            'Court search and a detail view with the location on a map.',
            "Booking, confirmation and each user's list of booked courts.",
            'Sign-up, sign-in and protected routes.',
            'An admin panel to create, edit and delete courts.',
          ],
        },
      },
    ],
  },
]

export const projectCategories = ['all', 'mobile', 'web', 'backend', 'ai']

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
