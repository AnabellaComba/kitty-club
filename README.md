# Kitty Club ♡

Pre Entrega Proyecto FrontEnd JS de Comba Anabella sobre una tienda de accesorios inspirados en Hello Kitty. Creado con HTML, CSS y JavaScript, sin instalaciones ni herramientas de compilación. Incluye un catálogo con seis productos ilustrados, filtros, carrito de demostración y formulario de contacto preparado para Formspree.

## Cómo verlo

1. Descargar o clonar el proyecto desde GitHub.
2. Abrí la carpeta del proyecto en Visual Studio Code.
3. Abrí index.html en tu navegador, o usá la extensión Live Server de VS Code y elegí «Open with Live Server».
4. Probá la navegación, los filtros y el carrito. Reducí el ancho de la ventana para ver el diseño móvil.

## Archivos

- index.html: estructura semántica, navegación, catálogo, reseñas y formulario.
- styles.css: estilos externos, Flexbox, Grid y media queries.
- script.js: filtros, carrito con almacenamiento local y envío a Formspree.
- imagenes/: ilustraciones locales, integradas mediante etiquetas img.

## Requisitos cubiertos

| Requisito | Implementación |
| --- | --- |
| HTML semántico | header, nav, main, section, footer y article |
| Navegación interna | Lista ul con enlaces a Inicio, Productos, Reseñas y Contacto |
| Contacto | Nombre, email y mensaje con etiquetas y validación HTML |
| CSS externo | styles.css, backgrounds y degradado en Contacto |
| Google Fonts | DM Sans y Playfair Display con fuentes de respaldo |
| Productos con Flexbox | .products y cards que cambian de distribución |
| Reseñas con Grid | Tres columnas en escritorio y una en celular |
| Contacto responsivo | Media queries para 900 px y 600 px |
| Multimedia | Ilustraciones locales con textos alternativos |

// En el caso futuro que requiera conectar a Formspree estas son las indicaciones:
## Conectar Formspree (paso necesario para recibir mensajes)

1. Ingresar a https://formspree.io/ y crear cuenta.
2. Crear un formulario y configurar el correo donde se quiere recibir los mensajes. Completar la verificación que solicite el servicio.
3. En la sección Integration, copiar el endpoint, que tiene este formato: https://formspree.io/f/IDENTIFICADOR.
4. En index.html buscar TU_FORM_ID y reemplazalo por tu el identificador. Conservar method="POST" y los atributos name de los campos.
5. Guardar el archivo y, después de publicar, enviar un mensaje de prueba desde el sitio. Revisar el panel de Formspree y el correo elegido.

No se incluye un endpoint inventado: el formulario avisa si todavía no se configuró. Los estados de éxito y error dependen de la respuesta real del servicio. El envío requiere internet; no fue probado contra una cuenta real.


## Subir el proyecto a GitHub, sin usar la terminal

1. Creá una cuenta o iniciá sesión en https://github.com/.
2. Usá el botón + y elegí New repository.
3. Escribí kitty-club como nombre, agregá una descripción y elegí Public. No subas claves ni datos privados.
4. Elegí Create repository.
5. En el repositorio nuevo, usá el enlace uploading an existing file. Si ya tiene archivos, elegí Add file → Upload files.
6. Arrastrá index.html, styles.css, script.js, README.md y la carpeta imagenes al área de carga. Subí el contenido de FrontEnd JS directamente; no encierres todo dentro de otra carpeta.
7. Verificá que imagenes conserve su nombre y contenga las imagenes.
8. Escribí un mensaje como «Crear tienda Kitty Club» y elegí Commit changes.

## Publicar gratis con GitHub Pages

GitHub Pages sirve para publicar este proyecto estático educativo. El carrito es una demostración y no procesa ventas.

1. Dentro de tu repositorio, abrir Settings.
2. En el menú lateral, elegir Pages.
3. En Build and deployment → Source, seleccionar Deploy from a branch.
4. En Branch seleccionar main y la carpeta /(root).
5. Hacer clic en Save.
6. Esperar a que finalice el despliegue. Revisar Actions si se quiere ver su estado.
7. Volver a Settings → Pages y abrir el enlace publicado. Su formato será https://TU_USUARIO.github.io/kitty-club/ si se conservó ese nombre de repositorio.
8. Probar imágenes, navegación, filtros y formulario desde el enlace público y desde el celular.

Para actualizar el sitio, subir las versiones nuevas de los archivos al mismo repositorio y confirmar los cambios. Pages vuelve a publicar desde la rama configurada.


Documentación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Alcance

Los precios, los productos y las reseñas son ilustrativos. No hay pagos, pedidos reales, inventario ni servidor propio. El carrito se guarda en el navegador cuando el almacenamiento local está disponible. Las ilustraciones que se utilizaron para esta demostración sobre Hello Kitty pertenece a Sanrio y conservan derechos de autor y el proyecto no tiene afiliación con la marca ni los derechos sobre la marca ni propagación de sus objetos expuestos a la venta. Tener en cuenta que Google Fonts y Formspree requieren conexión.
