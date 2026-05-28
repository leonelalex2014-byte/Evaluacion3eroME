<template>
  <article class="tarjeta-libro tarjeta">
    <h3>
      <router-link :to="{ name: 'Libro', params: { isbn: libro.isbn } }">{{ libro.titulo }}</router-link>
    </h3>
    <p class="meta-libro">{{ libro.autor }} · {{ libro.genero }}</p>
    <p class="isbn-libro">ISBN: {{ libro.isbn }}</p>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  libro: { type: Object, required: true },
})
</script>

<style scoped>
.tarjeta-libro {
  padding: 1rem;
  margin-bottom: 1rem;
}
.tarjeta-libro h3 {
  margin: 0 0 0.4rem;
  font-size: 1.1rem;
}
.tarjeta-libro a {
  color: #1d4ed8;
}
.meta-libro,
.isbn-libro {
  margin: 0;
  color: #475569;
}
</style>
