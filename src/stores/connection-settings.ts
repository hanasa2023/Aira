import { CommMethod, Protocal } from '~/enums'

export const useConnectionSettingsStore = defineStore(
  'connection-settings',
  () => {
    const protocal = useState('protocal', () => Protocal.SATORI)
    const commMethod = useState('commMethod', () => CommMethod.WEBSOCKET)
    const host = useState('host', () => 'localhost')
    const port = useState('port', () => 8080)
    const path = useState('path', () => '')
    const accessToken = useState('accessToken', () => '')

    return {
      protocal,
      commMethod,
      host,
      port,
      path,
      accessToken,
    }
  },
  {
    persist: true,
  }
)
