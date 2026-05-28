# Documentación del código del proyecto

Este documento describe cómo funciona el proyecto `Evaluacion3eroME` y detalla los archivos principales con explicaciones paso a paso.

---

## 1. `src/main.js`

1. `import { createApp } from 'vue'` — importa Vue para crear la aplicación.
2. `import { createPinia } from 'pinia'` — importa Pinia para manejar estado global.
3. `import './styles.css'` — importa los estilos globales de la aplicación.
4. `import App from './App.vue'` — importa el componente raíz.
5. `import router from './router'` — importa la configuración del enrutador.
6. `const app = createApp(App)` — crea la instancia principal de Vue.
7. `app.use(createPinia())` — registra Pinia en la aplicación.
8. `app.use(router)` — registra Vue Router en la aplicación.
9. `app.mount('#app')` — monta la aplicación en el elemento HTML con id `app`.

---

## 2. `src/App.vue`

1. `<template>` — define la estructura visual del componente raíz.
2. `<div class="estructura-app">` — contenedor principal con fondo y altura mínima.
3. `<BarraNavegacion />` — muestra la barra de navegación en todas las páginas.
4. `<main class="contenedor-pagina contenedor">` — contenedor para la vista activa.
5. `<router-view />` — renderiza el componente correspondiente a la ruta actual.
6. `</main>` — cierra el contenedor de contenido.
7. `</div>` — cierra el contenedor principal.
8. `</template>` — finaliza la plantilla.
9. `<script setup>` — bloque de script que usa la sintaxis de composición de Vue 3.
10. `import BarraNavegacion from './components/BarraNavegacion.vue'` — importa el componente de navegación.
11. `</script>` — termina el bloque de script.
12. `<style scoped>` — define estilos locales para este componente.
13. `.estructura-app { min-height: 100vh; background: linear-gradient(180deg, #fbefef 0%, #fff7f7 100%); }` — define el fondo de toda la aplicación.
14. `</style>` — cierra el bloque de estilos.

---

## 3. `src/router/index.js`

1. `import { createRouter, createWebHistory } from 'vue-router'` — importa funciones para el enrutador.
2. `import Inicio from '../Inicio.vue'` — importa la página de inicio.
3. `import Listado from '../Listado.vue'` — importa la página del listado completo.
4. `import Genero from '../Genero.vue'` — importa la vista de género filtrado.
5. `import Libro from '../Libro.vue'` — importa la vista de detalle del libro.
6. `const routes = [` — inicia la definición de rutas.
7. `  { path: '/', name: 'Inicio', component: Inicio },` — ruta de inicio.
8. `  { path: '/listado', name: 'Listado', component: Listado },` — ruta del listado completo.
9. `  { path: '/genero/:nombreGenero', name: 'Genero', component: Genero, props: true },` — ruta dinámica por género.
10. `  { path: '/libro/:isbn', name: 'Libro', component: Libro, props: true },` — ruta dinámica por ISBN.
11. `]` — cierra el arreglo de rutas.
12. `const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes, })` — crea la instancia del enrutador.
13. `export default router` — exporta el enrutador para usarlo en `main.js`.

---

## 4. `src/Inicio.vue`

1. `import { computed } from 'vue'` — importa `computed` para crear propiedades derivadas.
2. `import librosData from './assets/libros.json'` — importa los datos de los libros.
3. `import EncabezadoPagina from './components/EncabezadoPagina.vue'` — importa el encabezado.
4. `import EnlacesGenero from './components/EnlacesGenero.vue'` — importa los enlaces de género.
5. `import TarjetaLibro from './components/TarjetaLibro.vue'` — importa las tarjetas de libro.
6. `const libros = librosData.libros` — obtiene el arreglo de libros.
7. `const generos = computed(() => [...new Set(libros.map((libro) => libro.genero))].sort())` — calcula géneros únicos ordenados.
8. `const librosEjemplo = libros.slice(0, 6)` — selecciona los primeros seis libros.
9. El template muestra el encabezado, accesos directos, géneros y libros destacados.

---

## 5. `src/Listado.vue`

1. `import librosData from './assets/libros.json'` — importa los datos.
2. `import EncabezadoPagina from './components/EncabezadoPagina.vue'` — importa el encabezado.
3. `import TablaLibros from './components/TablaLibros.vue'` — importa la tabla.
4. `const libros = librosData.libros` — carga todos los libros.
5. El template usa `EncabezadoPagina` y `TablaLibros` para mostrar la colección.

---

## 6. `src/Genero.vue`

1. `import { computed } from 'vue'` — importa `computed`.
2. `import { useRoute } from 'vue-router'` — importa el hook de ruta.
3. `import librosData from './assets/libros.json'` — importa los libros.
4. `import EncabezadoPagina from './components/EncabezadoPagina.vue'` — importa el encabezado.
5. `import TablaLibros from './components/TablaLibros.vue'` — importa la tabla.
6. `const route = useRoute()` — obtiene la ruta actual.
7. `const genero = computed(() => route.params.nombreGenero)` — obtiene el género de la URL.
8. `const libros = computed(() => librosData.libros.filter((libro) => libro.genero === genero.value))` — filtra los libros por género.
9. El template muestra un encabezado dinámico, un mensaje cuando no hay resultados y la tabla de libros.

---

## 7. `src/Libro.vue`

1. `import { computed } from 'vue'` — importa `computed`.
2. `import { useRoute, useRouter } from 'vue-router'` — importa hooks de ruta y navegación.
3. `import librosData from './assets/libros.json'` — importa los datos.
4. `const router = useRouter()` — obtiene el router para navegar.
5. `const route = useRoute()` — obtiene la ruta actual.
6. `const isbn = computed(() => route.params.isbn)` — lee el ISBN desde la URL.
7. `const libro = computed(() => librosData.libros.find((item) => item.isbn === isbn.value))` — busca el libro por ISBN.
8. `function volverGenero()` — define la función para volver al género.
9. El template muestra un mensaje si no se encuentra el libro o la ficha completa si existe.

---

## 8. `src/components/BarraNavegacion.vue`

1. `template` — contiene el enlace al inicio y la imagen de fondo.
2. `router-link` — navega internamente a las rutas sin recargar la página.
3. `nav` — muestra navegación horizontal.
4. Los estilos aplican fondo, degradado y un diseño compacto.

---

## 9. `src/components/EncabezadoPagina.vue`

1. Recibe props `title` y `subtitle`.
2. Muestra `title` en un `h1` y `subtitle` en un `p` si existe.
3. Usa estilo de tarjeta con fondo claro, borde y sombra.

---

## 10. `src/components/EnlacesGenero.vue`

1. Recibe `generos` como prop.
2. Itera sobre los géneros y crea enlaces a `/genero/:nombreGenero`.
3. Facilita la navegación entre categorías sin repetir lógica.

---

## 11. `src/components/TablaLibros.vue`

1. Recibe `libros` y `title` como props.
2. Muestra un encabezado con la cantidad de libros.
3. Construye una tabla con títulos, autores y géneros.
4. Enlaza cada libro y género a sus rutas correspondientes.

---

## 12. `src/components/TarjetaLibro.vue`

1. Recibe un objeto `libro` como prop.
2. Muestra título, autor, género y ISBN.
3. El título enlaza a la vista de detalles del libro.

---

## 13. `src/assets/libros.json`

1. Almacena el arreglo `libros` con datos estáticos.
2. Cada libro incluye `titulo`, `autor`, `genero`, `editorial`, `anio_publicacion`, `precio_uyu` e `isbn`.
3. Es la fuente de datos local utilizada por todas las vistas.

---

## Flujo general

1. `main.js` inicia la aplicación.
2. `App.vue` muestra la cabecera y la vista activa.
3. El router carga `Inicio`, `Listado`, `Genero` o `Libro` según la URL.
4. Los componentes reutilizables mantienen la presentación consistente.
