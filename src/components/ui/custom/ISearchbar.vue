<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="relative flex w-full px-2">
    <Input
      id="search"
      type="text"
      placeholder="Search..."
      class="pl-7 h-7 bg-secondary"
    />
    <span class="absolute inset-y-0 flex items-center justify-center px-2">
      <Icon icon="ic:round-search" class="size-4 text-muted-foreground" />
    </span>
  </div>
</template>
