<script setup>
import { computed } from 'vue'
import librosData from './assets/libros.json'
import EncabezadoPagina from './components/EncabezadoPagina.vue'
import EnlacesGenero from './components/EnlacesGenero.vue'
import TarjetaLibro from './components/TarjetaLibro.vue'

const libros = librosData.libros
const generos = computed(() => [...new Set(libros.map((libro) => libro.genero))].sort())
const librosEjemplo = libros.slice(0, 6)
</script>

<template>
  <section class="tarjeta">
    <EncabezadoPagina title="Inicio" subtitle="Navegue entre vistas y explore nuestra colección de libros." />

    <div class="tarjeta-seccion bloque-info">
      <h2 class="titulo-seccion">Accesos directos</h2>
      <ul class="lista-enlaces">
        <li>
          <router-link class="boton-enlace" to="/listado">Ver listado completo de libros</router-link>
        </li>
        <li>
          <router-link class="boton-enlace" :to="{ name: 'Genero', params: { nombreGenero: generos[0] } }">Ver primer género disponible</router-link>
        </li>
      </ul>
    </div>

    <EnlacesGenero :generos="generos" />

    <div class="tarjeta-seccion tarjeta">
      <h2 class="titulo-seccion">Libros destacados</h2>
      <div>
        <TarjetaLibro v-for="libro in librosEjemplo" :key="libro.isbn" :libro="libro" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.tarjeta {
  padding: 1.5rem;
}
</style>
