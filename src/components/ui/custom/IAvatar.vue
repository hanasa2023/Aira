<template>
  <div class="relative cursor-pointer">
    <Avatar>
      <AvatarImage
        src="https://thirdqq.qlogo.cn/headimg_dl?dst_uin=2969709268&spec=640"
        alt="avatar"
      />
      <AvatarFallback>avatar</AvatarFallback>
    </Avatar>
    <span
      :class="`absolute bottom-0.5 size-4 border-2 border-transparent rounded-full bg-clip-padding -right-1 ${
        true ? 'bg-emerald-400' : 'bg-rose-400'
      }`"
    />
  </div>
</template>
