export const SITE_URL = 'https://devjfelipe.vercel.app'

export const profile = {
  name: 'Juan Felipe Andrade Vargas',
  givenNames: 'Juan Felipe',
  familyNames: 'Andrade Vargas',
  handle: 'DevJFelipe',
  email: 'juanfeav36@gmail.com',
  location: {
    es: 'Neiva, Huila, Colombia',
    en: 'Neiva, Huila, Colombia',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/devjfelipe',
    github: 'https://github.com/DevJFelipe',
  },
  bio: {
    es: [
      'Soy Juan Felipe Andrade Vargas, ingeniero de software de Neiva, Huila. Llevo más de tres años construyendo aplicaciones móviles y web, y trabajo los dos lados de un producto: la app en Flutter y la API que la sostiene.',
      'Me hago cargo de cada funcionalidad de punta a punta: análisis, diseño de la solución, desarrollo, pruebas, publicación y soporte en producción. Mi experiencia más reciente fue como Product Engineer en una app de fitness con más de un millón de usuarios activos.',
      'Hoy desarrollo mis propias apps, Milpaso y Calko, y acompaño a negocios con proyectos freelance. Estudio Ingeniería de Software en la Universidad Surcolombiana y me gradúo en diciembre de 2026.',
    ],
    en: [
      "I'm Juan Felipe Andrade Vargas, a software engineer from Neiva, Colombia. I've spent more than three years building mobile and web applications, and I work on both sides of a product: the Flutter app and the API behind it.",
      'I own each feature end to end: analysis, solution design, development, testing, release and production support. Most recently I was a Product Engineer on a fitness app with more than a million active users.',
      "Today I build my own apps, Milpaso and Calko, and take on freelance projects for businesses. I'm finishing a B.Sc. in Software Engineering at Universidad Surcolombiana, graduating in December 2026.",
    ],
  },
  education: {
    school: 'Universidad Surcolombiana',
    degree: { es: 'Ingeniería de Software', en: 'B.Sc. in Software Engineering' },
    place: { es: 'Neiva, Colombia', en: 'Neiva, Colombia' },
    status: { es: 'Grado esperado: diciembre de 2026', en: 'Expected graduation: December 2026' },
    coursework: {
      es: 'Cursos relevantes: desarrollo móvil, arquitectura de software e inteligencia artificial.',
      en: 'Relevant coursework: mobile development, software architecture and artificial intelligence.',
    },
  },
  certification: 'Scrum Fundamentals Certified (SCRUMstudy)',
}

export const principles = [
  {
    title: { es: 'Diseño antes de programar', en: 'Design before code' },
    body: {
      es: 'Cada solución queda documentada y revisada antes de escribir la primera línea.',
      en: 'Every solution is documented and reviewed before the first line is written.',
    },
  },
  {
    title: { es: 'Pruebas que prueban algo', en: 'Tests that prove something' },
    body: {
      es: 'Unitarias, de integración y de punta a punta en CI, verificadas por mutación: si rompo el código a propósito, una prueba tiene que fallar.',
      en: 'Unit, integration and end-to-end tests in CI, verified by mutation: if I break the code on purpose, a test has to fail.',
    },
  },
  {
    title: { es: 'QA en teléfonos reales', en: 'QA on real phones' },
    body: {
      es: 'Antes de cada entrega pruebo en dispositivos físicos, no solo en el emulador.',
      en: 'Before every release I test on physical devices, not only in the emulator.',
    },
  },
  {
    title: { es: 'IA con revisión humana', en: 'AI with human review' },
    body: {
      es: 'Uso la API de Claude en producción y agentes de código a diario, siempre con revisión de por medio.',
      en: 'I use the Claude API in production and coding agents every day, always with review in the loop.',
    },
  },
  {
    title: { es: 'Sprints cortos y trazables', en: 'Short, traceable sprints' },
    body: {
      es: 'SCRUM con sprints semanales y cada cambio rastreable en Jira, de la historia de usuario al despliegue.',
      en: 'SCRUM with weekly sprints and every change traceable in Jira, from user story to deployment.',
    },
  },
]

export const stackGroups = [
  {
    id: 'mobile',
    title: { es: 'Móvil', en: 'Mobile' },
    items: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Drift', 'Clean Architecture', 'Maestro (E2E)', { es: 'Publicación en App Store y Google Play', en: 'App Store and Google Play releases' }],
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    items: ['Python', 'Django REST Framework', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'SQL', { es: 'APIs REST', en: 'REST APIs' }],
  },
  {
    id: 'web',
    title: { es: 'Web', en: 'Web' },
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Shopify', { es: 'HTML y CSS', en: 'HTML and CSS' }],
  },
  {
    id: 'cloud',
    title: { es: 'Nube y DevOps', en: 'Cloud and DevOps' },
    items: ['Docker', 'GitHub Actions', 'Azure', 'Firebase', 'Infisical'],
  },
  {
    id: 'ai',
    title: { es: 'IA y datos', en: 'AI and data' },
    items: ['Claude API', 'OpenAI API', 'PostHog', 'Mixpanel', 'TensorFlow Lite', 'SARIMAX'],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'Jira', 'Notion', 'Figma', 'Postman'],
  },
]
