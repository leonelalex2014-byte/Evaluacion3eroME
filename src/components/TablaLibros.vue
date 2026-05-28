<template>
  <section class="seccion-lista-libros tarjeta">
    <div class="fila-titulo-seccion">
      <h2>{{ title }}</h2>
      <span class="cantidad-libros">{{ libros.length }} libros</span>
    </div>
    <div class="tabla-responsiva">
      <table class="tabla-libros">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="libro in libros" :key="libro.isbn">
            <td>
              <router-link :to="{ name: 'Libro', params: { isbn: libro.isbn } }">{{ libro.titulo }}</router-link>
            </td>
            <td>{{ libro.autor }}</td>
            <td>
              <router-link :to="{ name: 'Genero', params: { nombreGenero: libro.genero } }">{{ libro.genero }}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  libros: { type: Array, required: true },
  title: { type: String, default: 'Libros' },
})
</script>

<style scoped>
.seccion-lista-libros {
  margin-top: 1rem;
}
.fila-titulo-seccion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.cantidad-libros {
  color: #475569;
  font-size: 0.95rem;
}
.tabla-responsiva {
  overflow-x: auto;
}
.tabla-libros {
  width: 100%;
  border-collapse: collapse;
}
.tabla-libros th,
.tabla-libros td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  text-align: left;
}
.tabla-libros th {
  background: #f8fafc;
  color: #0f172a;
}
.tabla-libros tr:hover {
  background: #f1f5f9;
}
.tabla-libros a {
  color: #1d4ed8;
}
</style>
