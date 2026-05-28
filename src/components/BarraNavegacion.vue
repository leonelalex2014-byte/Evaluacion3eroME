<template>
  <header class="site-header">
    <div class="container header-inner">
      <div>
        <h1 class="site-title">Biblioteca</h1>
        <p class="site-subtitle">Explora libros por título, autor, género e ISBN</p>
      </div>
      <nav class="main-nav">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/listado" class="nav-link">Listado</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.site-header {
  background-image:
    linear-gradient(180deg, rgba(106, 26, 48, 0.72), rgba(106, 26, 48, 0.72)),
    url('/Earthly-Powers-Bookshelf-header-new-1500px-red.png');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 2rem 0;
  min-height: 240px;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.site-title {
  margin: 0;
  font-size: 1.6rem;
}
.site-subtitle {
  margin: 0.35rem 0 0;
  color: #dbeafe;
  font-size: 0.95rem;
}
.main-nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.nav-link {
  color: #ffffff;
  font-weight: 600;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>
