<template>
  <div id="add" class="flex">
    <Navigation />
    <div class="w-full">
      <Header />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
</script>
<style lang="scss" scoped>
#app {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}
</style>
