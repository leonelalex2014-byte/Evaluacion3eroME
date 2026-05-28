<template>
  <section class="lista-generos tarjeta tarjeta-seccion">
    <h2 class="titulo-seccion">Géneros disponibles</h2>
    <ul class="lista-enlaces">
      <li v-for="genero in generos" :key="genero">
        <router-link class="boton-enlace" :to="{ name: 'Genero', params: { nombreGenero: genero } }">
          {{ genero }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  generos: { type: Array, required: true },
})
</script>

<style scoped>
.lista-generos {
  padding: 1.5rem;
}
</style>
