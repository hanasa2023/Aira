<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '~/components/ui/resizable'
import { Icon } from '@iconify/vue'
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="h-full w-full">
    <ResizablePanel :default-size="25">
      <div class="h-full bg-blue-200">
        <div class="relative w-full max-w-sm items-center">
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon
              icon="ic-outline-search"
              class="size-6 text-muted-foreground"
            />
          </span>
        </div>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :default-size="75">
      <div class="h-full bg-blue-300"></div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
