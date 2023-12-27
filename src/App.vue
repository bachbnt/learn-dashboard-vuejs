<template>
  <div class="container">
    <CalcHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import CalcHeader from '@/components/CalcHeader.vue'
</script>

<style>
.container {
  display: flex;
  min-height: 100vh;
}
</style>
