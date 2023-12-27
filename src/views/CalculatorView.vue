<template>
  <div class="about">
    <CalcList />
  </div>
</template>

<script lang="ts">
import CalcList from '@/components/CalcList.vue'

export default {
  components: { CalcList }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
