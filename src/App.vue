<template>
  <body class="h-full w-full flex flex-col min-h-screen">
    <CalcHeader />
    <RouterView class="flex-1" />
  </body>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import CalcHeader from '@/components/CalcHeader.vue'
</script>
