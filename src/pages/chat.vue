<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel :default-size="28" class="max-w-80 min-w-40">
      <div class="h-full bg-blue-200 pt-7">
        <!-- Chat Sidebar top -->
        <div class="flex items-center justify-between px-2 pb-3">
          <ISearchbar />
          <div class="pr-2">
            <Button variant="secondary" size="icon" class="size-7">
              <Icon
                icon="tdesign:chat-bubble-add"
                class="size-7 text-muted-foreground"
              />
            </Button>
          </div>
        </div>
        <!-- Chat Sidebar main -->
        <div class="h-full bg-blue-50 pt-7"></div>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :default-size="72">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel :default-size="72">
          <ResizablePanelGroup direction="vertical" class="bg-blue-100">
            <!-- Chat Content top -->
            <div
              class="flex h-[72px] items-start justify-between px-4 backdrop-blur-lg bg-blue-300 pt-7"
            >
              <p class="text-lg">hanasaki</p>
              <div class="flex items-center justify-center">
                <IButton>
                  <Icon icon="ic:edit" class="size-6 text-muted-foreground" />
                </IButton>
                <IButton>
                  <Icon icon="ci:exit" class="size-6 text-muted-foreground" />
                </IButton>
                <IButton>
                  <Icon
                    icon="ic:round-more-horiz"
                    class="size-6 text-muted-foreground"
                  />
                </IButton>
              </div>
            </div>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel :default-size="100">
                <ResizablePanelGroup direction="vertical">
                  <!-- Chat Content main -->
                  <ResizablePanel :default-size="62">
                    <ChatContent />
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel
                    :default-size="38"
                    class="min-h-[148px] max-h-80"
                  >
                    <ChatInputArea />
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <div class="h-full w-[180px] bg-blue-400"></div>
            </ResizablePanelGroup>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
