<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import librosData from './assets/libros.json'

const router = useRouter()
const route = useRoute()
const isbn = computed(() => route.params.isbn)
const libro = computed(() => librosData.libros.find((item) => item.isbn === isbn.value))

function volverGenero() {
  if (libro.value && libro.value.genero) {
    router.push({ name: 'Genero', params: { nombreGenero: libro.value.genero } })
  } else {
    router.push({ name: 'Inicio' })
  }
}
</script>

<template>
  <section class="pagina-libro">
    <div v-if="!libro">
      <h1>Libro no encontrado</h1>
      <p>El ISBN solicitado no coincide con ningún libro.</p>
      <router-link to="/">Volver al inicio</router-link>
    </div>
    <div v-else>
      <h1>{{ libro.titulo }}</h1>
      <p>{{ libro.autor }} · {{ libro.genero }}</p>
      <dl>
        <dt>Editorial</dt>
        <dd>{{ libro.editorial }}</dd>
        <dt>Año de publicación</dt>
        <dd>{{ libro.anio_publicacion }}</dd>
        <dt>Precio</dt>
        <dd>$ {{ libro.precio_uyu }}</dd>
        <dt>ISBN</dt>
        <dd>{{ libro.isbn }}</dd>
      </dl>
      <button type="button" @click="volverGenero">Ver más del mismo género</button>
    </div>
  </section>
</template>

<style scoped>
.pagina-libro {
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem;
}

h1 {
  margin: 0 0 1rem;
}

p {
  margin: 0 0 1rem;
}

dt {
  font-weight: 700;
  margin-top: 1rem;
}

dd {
  margin: 0 0 0.75rem;
}

button {
  margin-top: 1.5rem;
  padding: 0.85rem 1.25rem;
  border: 1px solid #2563eb;
  border-radius: 999px;
  background: white;
  color: #2563eb;
  cursor: pointer;
}

button:hover {
  background: #e0f2fe;
}
</style>
