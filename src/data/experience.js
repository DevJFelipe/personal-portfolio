// Source: CV (agosto de 2026), aligned with LinkedIn. Months are 'YYYY-MM'.
export const experience = [
  {
    id: 'symmetry',
    company: 'Symmetry',
    role: { es: 'Product Engineer', en: 'Product Engineer' },
    start: '2025-12',
    end: '2026-09',
    place: { es: 'Remoto, empresa de EE. UU.', en: 'Remote, U.S. company' },
    context: {
      es: 'App de fitness con más de 1 millón de usuarios activos.',
      en: 'Fitness app with more than 1 million active users.',
    },
    highlights: {
      es: [
        'Construí funcionalidades de punta a punta en el cliente Flutter y el backend en Django REST Framework: análisis, diseño de solución documentado, implementación, pruebas, QA en dispositivo físico, publicación y monitoreo.',
        'Lideré tres épicas de principio a fin, entre ellas la integración con Apple Health y Health Connect.',
        'Migré el almacenamiento local de Hive a Drift: la app quedó offline-first, con una cola de operaciones FIFO que se concilia con la API al volver la conexión.',
        'Construí una suite E2E de 9 flujos con Maestro que corre en CI, dentro de un monorepo con Clean Architecture y más de 13.000 tests.',
        'En la API entregué rankings dinámicos de fuerza, endpoints sociales y localización de notificaciones; corregí vulnerabilidades críticas de seguridad y llevé los secretos de desarrollo a Infisical.',
        'Construí un pipeline de internacionalización sobre la Claude Batch API (unos 4.600 textos por idioma) con control de paridad en CI, y diseñé y medí A/B tests con PostHog sobre unos 96.000 usuarios semanales.',
      ],
      en: [
        'Built features end to end across the Flutter client and the Django REST Framework backend: analysis, documented solution design, implementation, testing, physical-device QA, release and monitoring.',
        'Led three epics from start to finish, including the Apple Health and Health Connect integration.',
        'Migrated local storage from Hive to Drift, making the app offline-first with a FIFO operation queue that reconciles with the API once connectivity returns.',
        'Built a 9-flow end-to-end suite with Maestro that runs in CI, inside a Clean Architecture monorepo with more than 13,000 tests.',
        'On the API, delivered dynamic strength rankings, social endpoints and notification localization; fixed critical security vulnerabilities and moved development secrets into Infisical.',
        'Built an internationalization pipeline on the Claude Batch API (about 4,600 strings per language) with a parity gate in CI, and designed and measured A/B tests with PostHog across about 96,000 weekly users.',
      ],
    },
    stack: ['Flutter', 'Dart', 'Django REST Framework', 'Drift', 'Maestro', 'PostHog', 'Claude API'],
  },
  {
    id: 'skillion',
    company: 'Skillion Studios',
    role: { es: 'Cofundador y líder técnico', en: 'Co-founder and lead developer' },
    start: '2025-06',
    end: '2026-10',
    place: { es: 'Remoto', en: 'Remote' },
    context: {
      es: 'Startup de apps móviles.',
      en: 'Mobile app startup.',
    },
    highlights: {
      es: [
        'Diseñé la arquitectura y desarrollé desde cero una app móvil gamificada con Flutter y Clean Architecture, con Riverpod para el estado y Drift para la persistencia local en iOS y Android.',
        'Integré Mixpanel y Firebase Analytics para medir eventos y retención, y lideré el roadmap técnico equilibrando velocidad de entrega y calidad.',
      ],
      en: [
        'Architected and built a gamified mobile app from scratch with Flutter and Clean Architecture, using Riverpod for state and Drift for local persistence on iOS and Android.',
        'Integrated Mixpanel and Firebase Analytics to track events and retention, and led the technical roadmap balancing delivery speed and quality.',
      ],
    },
    stack: ['Flutter', 'Riverpod', 'Drift', 'Mixpanel', 'Firebase'],
  },
  {
    id: 'inmero',
    company: 'Inmero',
    role: { es: 'Desarrollador backend', en: 'Backend developer' },
    start: '2025-01',
    end: '2025-12',
    place: { es: 'Neiva, Colombia', en: 'Neiva, Colombia' },
    context: {
      es: 'Plataforma IoT de maquinaria agrícola.',
      en: 'Agricultural machinery IoT platform.',
    },
    highlights: {
      es: [
        'Diseñé y construí el backend de una plataforma de gestión de maquinaria con Python y Django REST Framework, que recibe telemetría IoT y sirve predicciones de IA sobre PostgreSQL.',
        'Implementé una arquitectura por capas (dominio, transformación de datos, lógica y API) para desacoplar la lógica de negocio y mejorar la testabilidad.',
        'Construí pipelines de CI/CD con Docker para pruebas automatizadas y despliegues semanales, y entregué los módulos de maquinaria, mantenimiento y nómina bajo SCRUM.',
      ],
      en: [
        'Designed and built the backend of a machinery management platform in Python and Django REST Framework, ingesting IoT telemetry and serving AI predictions over PostgreSQL.',
        'Implemented a layered architecture (domain, data transformation, business logic and API) to decouple business rules and improve testability.',
        'Built CI/CD pipelines with Docker for automated testing and weekly deployments, and delivered the machinery, maintenance and payroll modules under SCRUM.',
      ],
    },
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'fitnow',
    company: 'FitNow',
    role: { es: 'Desarrollador backend', en: 'Backend developer' },
    start: '2023-04',
    end: '2023-05',
    place: { es: 'Neiva, Colombia', en: 'Neiva, Colombia' },
    context: {
      es: 'Proyecto académico, Universidad Surcolombiana.',
      en: 'Academic project, Universidad Surcolombiana.',
    },
    highlights: {
      es: [
        'Construí un generador de rutinas de gimnasio con IA usando Java Spring Boot y la API de OpenAI, que redujo en 70 % el tiempo de crear planes de entrenamiento a mano.',
        'Desplegué la API REST en Azure con PostgreSQL y alcanzó 99,9 % de disponibilidad en pruebas de carga.',
      ],
      en: [
        'Built an AI gym-routine generator with Java Spring Boot and the OpenAI API, cutting manual training-plan creation time by 70%.',
        'Deployed the REST API on Azure with PostgreSQL, reaching 99.9% availability under load testing.',
      ],
    },
    stack: ['Java', 'Spring Boot', 'OpenAI API', 'Azure', 'PostgreSQL'],
  },
]
