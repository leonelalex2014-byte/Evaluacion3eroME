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
  margin-bottom: 1.1rem;
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(159, 18, 57, 0.12), rgba(255, 245, 247, 0.95));
  border: 1px solid rgba(159, 18, 57, 0.14);
  box-shadow: 0 12px 24px rgba(159, 18, 57, 0.08);
  position: relative;
  overflow: hidden;
}
.encabezado-pagina::before {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.82), transparent 30%), radial-gradient(circle at bottom right, rgba(159, 18, 57, 0.14), transparent 24%);
  pointer-events: none;
}
.encabezado-pagina h1,
.encabezado-pagina p {
  position: relative;
}
.encabezado-pagina h1 {
  margin: 0;
  font-size: clamp(1.8rem, 2.1vw, 2.3rem);
  color: #7f1d1d;
  letter-spacing: -0.03em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
.encabezado-pagina p {
  margin: 0.55rem 0 0;
  color: #63152a;
  line-height: 1.5;
  max-width: 72ch;
  font-size: 0.98rem;
}
</style>
