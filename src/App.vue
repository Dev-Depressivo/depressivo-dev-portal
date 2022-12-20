<script setup>
  import Links from './components/Links.vue'
  import Begin from './components/Begin.vue'
</script>

<template>
  <header>
    <div>
      <router-link to="/">
        <img alt="Logo Super Impactante" class="logo" src="./assets/dino.png" width="256" height="256" />
      </router-link>
      <Links />
    </div>    

    <div class="wrapper">
      <Begin msg="Será que esse projeto será finalizado?" />
    </div>
  </header>

  <main>
    <router-view></router-view>
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

  main{
    margin: 10px;
  }
}
</style>