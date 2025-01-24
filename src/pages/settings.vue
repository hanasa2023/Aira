<script lang="ts" setup>
const selectItems = [
  { name: '通用', value: 'General' },
  { name: '连接', value: 'Connection' },
]
const selected = useState(() => 'General')
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <div class="flex h-8 w-full bg-blue-300"></div>
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel :default-size="28" class="max-w-80 min-w-40">
        <div class="flex flex-col h-full bg-blue-100 p-2">
          <SettingsListItem
            v-for="item in selectItems"
            :key="item.value"
            :title="item.name"
            :isSelected="selected === item.value"
            @selected="selected = item.value"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel :default-size="72">
        <div class="flex h-full bg-blue-50">
          <div class="flex h-full w-full" v-if="selected === 'General'">
            <GeneralSettingsContent />
          </div>
          <div class="flex h-full w-full" v-else-if="selected === 'Connection'">
            <ConnectionSettingsContent />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
