<script setup>
import Menu from './components/menu.vue'
import statisticPanel from './components/statistic-panel.vue';
import productsPanel from './components/products-page.vue';

</script>

<template>
  <div class="container">
    <div class="row">
      <Menu />
    </div>

    <div class="row">
      <statisticPanel />
    </div>

    <div class="row">
      <router-view></router-view>

      <!-- <productsPanel /> -->
    </div>
  </div>
</template>

<style scoped>
/* * {
  border: 1px red solid;
} */

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
