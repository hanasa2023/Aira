<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div
    class="flex flex-col w-15 h-full p-2 items-center justify-start bg-blue-300"
  >
    <div class="flex flex-col items-center justify-start flex-grow">
      <p class="pt-2 pb-4">Aira</p>
      <IAvatar />
      <INavGroup />
    </div>
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center justify-center py-2">
        <IButton class="rounded-sm hover:bg-secondary">
          <Icon
            icon="solar:hamburger-menu-broken"
            class="size-6 text-primary"
          />
        </IButton>
      </div>
    </div>
  </div>
</template>
