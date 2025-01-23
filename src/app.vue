<script setup lang="ts">
import '~/asserts/css/tailwind.css'
</script>

<template>
  <NuxtLayout>
    <!-- Dragger bar -->
    <div
      class="h-7 white flex fixed top-0 left-0 right-0 justify-center items-center app-region-drag"
    ></div>
    <!-- Main Page -->
    <div class="h-screen w-screen flex">
      <!-- Sidebar -->
      <ISidebar />
      <!-- Page -->
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
