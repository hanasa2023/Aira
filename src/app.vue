<script setup lang="ts">
import '@/asserts/css/tailwind.css'
import { Icon } from '@iconify/vue'
</script>

<template>
  <NuxtLayout>
    <!-- Dragger bar -->
    <div
      class="h-5 white flex fixed top-0 left-0 right-0 justify-center items-center app-region-drag"
    ></div>
    <!-- Main Page -->
    <div class="h-screen w-screen flex">
      <!-- Sidebar -->
      <div
        class="flex flex-col w-15 h-full p-2 items-center justify-start bg-blue-300"
      >
        <div class="flex flex-col items-center justify-start flex-grow">
          <p class="py-2">Aira</p>
          <Avatar>
            <AvatarImage
              src="https://thirdqq.qlogo.cn/headimg_dl?dst_uin=2969709268&spec=640"
              alt="avatar"
            />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
          <ToggleGroup type="single" class="py-2">
            <ToggleGroupItem value="/chat">
              <Icon
                icon="mingcute:chat-2-fill"
                class="text-pink-200 text-[24px]"
                flip="horizontal"
              />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div class="flex items-center justify-center">
          <div class="flex flex-col items-center justify-center py-2">
            <div @click="">
              <Icon
                icon="solar:hamburger-menu-broken"
                :width="24"
                :height="24"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Page -->
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
