export const services = [
  {
    id: 'mobile',
    icon: 'mobile',
    title: { es: 'Apps móviles', en: 'Mobile apps' },
    body: {
      es: 'Apps para iOS y Android con Flutter: arquitectura limpia, funcionamiento sin conexión, compras dentro de la app y publicación en App Store y Google Play.',
      en: 'iOS and Android apps in Flutter: clean architecture, offline support, in-app purchases and release on the App Store and Google Play.',
    },
    tech: ['Flutter', 'Dart', 'Riverpod', 'Drift', 'Firebase'],
  },
  {
    id: 'web',
    icon: 'store',
    title: { es: 'Tiendas en línea y sitios web', en: 'Online stores and websites' },
    body: {
      es: 'Tiendas en Shopify con los pagos que usan tus clientes en Colombia (tarjeta, PSE, Nequi) y atención por WhatsApp, y sitios a la medida en React.',
      en: 'Shopify stores with the payment methods your customers use in Colombia (cards, PSE, Nequi) and WhatsApp support, plus custom React websites.',
    },
    tech: ['Shopify', 'Liquid', 'React', 'JavaScript'],
  },
  {
    id: 'backend',
    icon: 'server',
    title: { es: 'Backends y APIs', en: 'Backends and APIs' },
    body: {
      es: 'APIs REST con Python y Django REST Framework o con Java y Spring Boot, sobre PostgreSQL, empaquetadas con Docker y con despliegue continuo.',
      en: 'REST APIs with Python and Django REST Framework or Java and Spring Boot, on PostgreSQL, packaged with Docker and continuously delivered.',
    },
    tech: ['Django REST Framework', 'Spring Boot', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'quality',
    icon: 'chart',
    title: { es: 'Calidad y producto', en: 'Quality and product' },
    body: {
      es: 'Pruebas automatizadas, analítica y A/B tests para que las decisiones salgan de datos y no de suposiciones.',
      en: 'Automated testing, analytics and A/B tests, so decisions come from data rather than guesses.',
    },
    tech: ['Maestro', 'PostHog', 'Mixpanel', 'GitHub Actions'],
  },
]
