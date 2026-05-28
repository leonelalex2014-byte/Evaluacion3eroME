<template>
  <div class="estructura-app">
    <BarraNavegacion />
    <main class="contenedor-pagina contenedor">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BarraNavegacion from './components/BarraNavegacion.vue'
</script>

<style scoped>
.estructura-app {
  min-height: 100vh;
  background: linear-gradient(180deg, #fbefef 0%, #fff7f7 100%);
}
</style>
