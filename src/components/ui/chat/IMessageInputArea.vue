<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex flex-col h-full bg-blue-200">
    <div class="flex items-center justify-between px-4 pt-1">
      <div class="flex">
        <IButton>
          <Icon
            icon="mingcute:emoji-line"
            class="size-6 text-muted-foreground"
          />
        </IButton>
      </div>
      <div class="flex">
        <IButton>
          <Icon
            icon="mingcute:history-anticlockwise-line"
            class="size-6 text-muted-foreground"
          />
        </IButton>
      </div>
    </div>
    <div class="flex flex-col h-full">
      <Textarea
        placeholder=""
        class="flex h-full shadow-none rounded-none resize-none border-none focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      ></Textarea>
      <div class="flex items-center justify-end p-4">
        <Button class="h-7 bg-blue-400">Send</Button>
      </div>
    </div>
  </div>
</template>
