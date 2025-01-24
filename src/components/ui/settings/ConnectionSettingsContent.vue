<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { watchDebounced } from '@vueuse/core'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { CommMethod, Protocal } from '~/enums'

const connectionSettings = useConnectionSettingsStore()

const formSchema = z.object({
  protocal: z.nativeEnum(Protocal),
  commMethod: z.nativeEnum(CommMethod),
  host: z.string(),
  port: z.number(),
  path: z.string().optional(),
  accessToken: z.string().optional(),
})

const form = useForm<z.infer<typeof formSchema>>({
  validationSchema: toTypedSchema(formSchema),
  initialValues: {
    protocal: connectionSettings.protocal,
    commMethod: connectionSettings.commMethod,
    host: connectionSettings.host,
    port: connectionSettings.port,
    path: connectionSettings.path,
    accessToken: connectionSettings.accessToken,
  },
})

const onSubmit = form.handleSubmit(async (values) => {
  console.info(values)
  connectionSettings.$patch(values)
})

watchDebounced(
  form.values,
  async () => {
    await onSubmit()
  },
  { deep: true, debounce: 300, maxWait: 1000 }
)

defineExpose({ resetFrom: form.resetForm })
</script>

<template>
  <div class="flex flex-col h-full w-full px-2">
    <div class="flex flex-col w-full py-4 px-8">
      <p class="text-xl font-bold">连接</p>
      <p class="text-sm py-1">配置机器人的连接信息</p>
    </div>
    <Separator />
    <ScrollArea class="flex flex-col h-full w-full">
      <AutoForm
        class="w-2/3 space-y-6 px-8 py-4"
        :schema="formSchema"
        :form="form"
        :field-config="{
          protocal: {
            label: '协议',
            description: '机器人使用的聊天平台数据协议',
          },
          commMethod: {
            label: '通信方式',
            description: '机器人与聊天平台的通信方式',
          },
          host: { label: '服务器地址', description: '聊天平台服务器地址' },
          port: { label: '服务器端口', description: '聊天平台服务器端口' },
          path: { label: '路径', description: 'Satori路径' },
          accessToken: { label: '访问令牌', description: 'Satori 访问令牌' },
        }"
      ></AutoForm>
    </ScrollArea>
  </div>
</template>
