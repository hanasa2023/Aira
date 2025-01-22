import { WebSocketServer } from 'ws'
import { LoginSatatus, Opcode } from '~/enums'
import { IEvent, Op } from '~/models'

export default defineNitroPlugin((nitroApp) => {
  console.log('App mounted')
  const wss = new WebSocketServer({ port: 8000, path: '/v1/events' })
  console.log('WebSocket Server is running on ws://localhost:8000/v1/events')

  wss.on('connection', (ws) => {
    ws.on('error', (err) => {
      console.log(err)
    })

    ws.on('message', (data) => {
      const message: Op = JSON.parse(data.toString())

      if (message.op === Opcode.IDENTIFY) {
        ws.send(
          JSON.stringify({
            op: Opcode.READY,
            body: {
              logins: [
                {
                  sn: 123456,
                  platform: 'Aira',
                  user: {
                    id: '123',
                    name: 'test',
                    is_bot: true,
                  },
                  status: LoginSatatus.ONLINE,
                  adapter: '',
                },
              ],
              proxy_urls: [],
            },
          })
        )
      } else if (message.op === Opcode.PING) {
        ws.send(JSON.stringify({ op: Opcode.PONG }))
      } else if (message.op === Opcode.EVENT) {
        const body = message.body as IEvent
        // config.lastSn = body.sn
        ws.emit('')
      }
    })

    ws.on('close', () => {
      console.info('Close Websocket Server')
    })
  })
})
