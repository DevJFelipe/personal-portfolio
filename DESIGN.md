# DESIGN.md

Sistema visual del portafolio. El hero original es la referencia: todo lo demás extiende su mundo en lugar de reemplazarlo.

## Mundo

Campo verde de noche: el fondo continúa el color base de la ilustración del hero (`#002b23`), con brillos suaves en los bordes. El sitio es oscuro porque así nació la identidad, y se lee cómodo en la pantalla de un reclutador o de un cliente en la noche.

Los cuatro destellos del arte original se dibujan alrededor de la ilustración del hero, no en la imagen de fondo: así nunca caen sobre el nombre ni sobre el texto, sea cual sea el ancho.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `--ground` | `#002b23` | Fondo de página, igual al del hero |
| `--ground-raised` | `#04352c` | Secciones alternas, tarjetas y paneles |
| `--ground-deep` | `#001d17` | Pie de página, menú móvil |
| `--text` | `#eef6f2` | Texto principal |
| `--text-2` | `#a9c4ba` | Texto secundario (tinte verde, nunca gris) |
| `--text-3` | `#92afa4` | Texto terciario; no usar sobre `--surface` |
| `--sprout` | `#8be3b0` | Acento interactivo: enlaces, foco, estados activos |
| `--maize` | `#f2c45a` | Señal cálida: disponibilidad y detalles puntuales |

Todo el texto pasa 4.5:1 sobre su fondo.

## Tipografía

Una sola familia: **Schibsted Grotesk** (OFL), grotesca sólida que conserva el aire del hero original. Escala en `tokens.css` (`--text-xs` a `--text-hero`), títulos en peso 700 con `text-wrap: balance`, cuerpo a 1.65 de interlineado y medida de 66 caracteres.

## Componentes

- **Botones:** esquinas rectas y relleno que barre de izquierda a derecha al pasar el cursor, heredados del hero. `btn--solid` para la acción principal.
- **Acción de texto:** texto en negrita con flecha que se desplaza (el «Hablemos» del hero).
- **Proyectos:** solo las capturas reales llevan imagen (marco 16:10 con borde fino). Un proyecto sin capturas públicas va en una lista de texto con filetes: nombre, resumen, tecnologías y estado. No se dibujan ilustraciones ni diagramas para rellenar.
- **Servicios:** lista tipográfica, sin íconos en recuadros.
- **Chips:** tecnologías, con borde fino y radio pequeño.
- **Línea de tiempo:** fechas a la izquierda, rol y empresa a la derecha; en «Sobre mí» la línea se llena al bajar.
- **Superficies fijas:** la cabecera y la barra de filtros son opacas cuando quedan fijas; con transparencia se leía el contenido que pasaba por debajo. En celular la barra de filtros no se fija: ocuparía un cuarto de la pantalla.

## Movimiento

- Un único momento orquestado: la entrada del hero al cargar el inicio. Sube y aparece, corta y sin desenfoque: desenfocar texto en cada cuadro es lo más caro de una entrada en un celular lento.
- El resto del movimiento responde a una acción: hover, menú, filtros, copiar correo, envío del formulario.
- Con `prefers-reduced-motion` todo queda quieto y el rol del hero se muestra sin animación de escritura.

## Rendimiento

- La fuente latina se precarga desde `index.html`, así el texto no salta cuando llega.
- React y el router van en su propio archivo, que casi nunca cambia y sigue en caché entre despliegues.

## Reglas

- Sin etiquetas pequeñas en mayúsculas encima de los títulos.
- Sin texto con degradado ni tarjetas idénticas de ícono + título + texto como estructura.
- Todo control con foco visible, objetivos táctiles de al menos 44 px y textos en los dos idiomas.
