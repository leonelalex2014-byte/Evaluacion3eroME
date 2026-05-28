<template>
  <header class="encabezado-pagina">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<style scoped>
.encabezado-pagina {
  margin-bottom: 1.5rem;
}
.encabezado-pagina h1 {
  margin: 0;
  font-size: clamp(2rem, 2.2vw, 2.4rem);
  color: #3e1216;
}
.encabezado-pagina p {
  margin: 0.5rem 0 0;
  color: #6f2a33;
  line-height: 1.6;
}
</style>
