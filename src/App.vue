<script setup>
import Begin from './components/Begin.vue'
</script>

<template>
  <header>
    <img alt="Logo Super Impactante" class="logo" src="./assets/dino.png" width="256" height="256" />

    <div class="wrapper">
      <Begin msg="Será que esse projeto será finalizado?" />
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
