<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import librosData from './assets/libros.json'
import EncabezadoPagina from './components/EncabezadoPagina.vue'
import TablaLibros from './components/TablaLibros.vue'

const route = useRoute()
const genero = computed(() => route.params.nombreGenero)
const libros = computed(() =>
  librosData.libros.filter((libro) => libro.genero === genero.value),
)
</script>

<template>
  <section>
    <EncabezadoPagina :title="`Género: ${genero}`" subtitle="Mostrando libros filtrados por el género seleccionado." />

    <div v-if="libros.length === 0" class="tarjeta bloque-info">
      <p>No se encontraron libros para este género.</p>
      <router-link class="boton-enlace" to="/">Volver al inicio</router-link>
    </div>
    <div v-else>
      <TablaLibros :libros="libros" :title="`Libros de ${genero}`" />
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 1080px;
}
</style>
