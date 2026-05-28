<script setup>
import librosData from './assets/libros.json'
import EncabezadoPagina from './components/EncabezadoPagina.vue'
import TablaLibros from './components/TablaLibros.vue'

const libros = librosData.libros
</script>

<template>
  <section>
    <EncabezadoPagina title="Listado de libros" subtitle="Revisa toda la colección disponible con título, autor y género." />
    <TablaLibros :libros="libros" title="Colección completa" />
  </section>
</template>

<style scoped>
section {
  max-width: 1080px;
}
</style>
