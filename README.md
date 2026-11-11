# Portafolio de Juan Felipe Andrade Vargas

Sitio personal bilingüe (español e inglés) con inicio, sobre mí, proyectos con su caso de estudio y contacto.

En producción: **https://devjfelipe.vercel.app**

## Tecnologías

- React 19 y React Router 8, empaquetado con Vite 8.
- CSS propio con tokens de diseño en `src/styles/tokens.css`. Las decisiones visuales están en [`DESIGN.md`](DESIGN.md).
- Tipografía Schibsted Grotesk (licencia OFL), servida desde el propio sitio.
- Despliegue en Vercel (plan Hobby). Cada push a `master` publica una nueva versión y cada rama tiene su propia vista previa.

## Comandos

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # sirve dist/ para revisarlo
npm run lint
```

Requiere Node 20.19 o superior.

## Dónde se edita el contenido

| Qué | Archivo |
| --- | --- |
| Textos de la interfaz en los dos idiomas | `src/i18n/messages.js` |
| Nombre, correo, enlaces, biografía, formación, forma de trabajar y tecnologías | `src/data/profile.js` |
| Experiencia laboral | `src/data/experience.js` |
| Servicios de la página de inicio | `src/data/services.js` |
| Proyectos y sus casos de estudio | `src/data/projects.js` |

Todo el contenido se escribe como `{ es: '...', en: '...' }`. Si falta la versión en inglés, se muestra la española.

### Agregar un proyecto

1. Copia uno de los objetos de `src/data/projects.js` y cambia `slug`, textos, `stack` y `links`.
2. Para la imagen: pon capturas en `src/assets/projects/` (formato WebP) y usa `media: { type: 'screens', ... }` o `type: 'phones'`. Si no hay capturas públicas, no pongas `media`: el proyecto sale en la lista de texto, sin imagen inventada.
3. `featured: true` lo muestra en el inicio (se usan los cuatro primeros destacados).
4. Agrega la URL nueva a `public/sitemap.xml`.

### Cuando Calko salga en Google Play

En `src/data/projects.js`, dentro de `calko`, cambia `googlePlaySoon: true` por `googlePlay: 'https://play.google.com/store/apps/details?id=…'` y actualiza los textos de plataforma y estado.

## Idiomas

- El idioma inicial sale de `?lang=es` o `?lang=en` en la URL, luego de la última elección guardada en el navegador y, si no hay ninguna, del idioma del navegador.
- El selector ES | EN cambia todo el sitio al instante, actualiza el título de la pestaña y el atributo `lang` del documento.

## Formulario de contacto

El formulario envía los mensajes con [FormSubmit](https://formsubmit.co), sin servidor propio ni cuenta.

- **Activación (una sola vez):** el primer mensaje que se envíe desde el sitio publicado hace que FormSubmit mande a `juanfeav36@gmail.com` un correo con el botón «Activate Form». Hay que abrirlo y confirmar. Desde ese momento los mensajes llegan normalmente.
- Opcional: después de activar, FormSubmit entrega un alias aleatorio. Si se reemplaza el correo por ese alias en `ENDPOINT` (`src/components/contact/ContactForm.jsx`), la dirección deja de aparecer en el código del formulario.
- Si el envío falla, el formulario muestra el correo con un botón para copiarlo, así nadie se queda sin forma de escribir.

## Seguridad y rendimiento

`vercel.json` define la reescritura para las rutas del sitio, caché larga para los archivos con hash y cabeceras de seguridad (CSP, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`). Si se agrega un servicio externo nuevo (por ejemplo, analítica), hay que permitir su dominio en la `Content-Security-Policy`.
