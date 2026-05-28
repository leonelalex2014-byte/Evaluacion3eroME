# Evaluacion3eroME

Proyecto de biblioteca interactiva desarrollado con Vue 3 y Vite.

## Descripción

Esta aplicación permite navegar una colección de libros por género, ver el listado completo y consultar detalles de cada título.

## Requisitos

- Node.js 16 o superior
- pnpm instalado globalmente
- Navegador moderno (Chrome, Edge, Firefox)

## Instalación

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:

```sh
pnpm install
```

## Desarrollo

Inicia el servidor de desarrollo con recarga en caliente:

```sh
pnpm dev
```

Luego abre la dirección que indique Vite, normalmente `http://localhost:5173`.

## Generar producción

Para compilar y minificar el proyecto:

```sh
pnpm build
```

Para previsualizar el resultado de producción:

```sh
pnpm preview
```

## Estructura principal

- `src/App.vue` — componente raíz de la aplicación.
- `src/main.js` — punto de entrada.
- `src/router/index.js` — rutas de Vue Router.
- `src/components/` — componentes reutilizables, como encabezado, tarjeta de libro y barra de navegación.
- `src/assets/libros.json` — datos de ejemplo de los libros.
- `src/styles.css` — estilos globales.

## Uso

- `Inicio` muestra accesos directos y libros destacados.
- `Listado` muestra la colección completa de libros.
- `Género` filtra los libros por categoría seleccionada.
- `Libro` muestra los detalles de cada obra.

## Buenas prácticas

- Mantén los componentes pequeños y específicos.
- Usa rutas con Vue Router para navegación sin recarga.
- Actualiza `src/assets/libros.json` para cambiar la colección de libros.

## Repositorio remoto

El proyecto está alojado en GitHub en:

https://github.com/leonelalex2014-byte/Evaluacion3eroME
