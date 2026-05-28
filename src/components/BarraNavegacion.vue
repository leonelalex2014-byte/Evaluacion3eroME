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
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 1.25rem 0;
  min-height: 180px;
  display: grid;
  place-items: center;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: min(1080px, 100%);
  margin: 0 auto;
}
.site-title {
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: 0.01em;
}
.site-subtitle {
  margin: 0.35rem 0 0;
  color: rgba(219, 234, 254, 0.92);
  font-size: 0.9rem;
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
