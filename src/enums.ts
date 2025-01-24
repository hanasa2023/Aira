export enum ChannelType {
  TEXT,
  DIRECT,
  CATEGORY,
  VOICE,
}

export enum LoginSatatus {
  OFFLINE,
  ONLINE,
  CONNECT,
  DISCONNECT,
  RECONNECT,
}

export enum Opcode {
  EVENT,
  PING,
  PONG,
  IDENTIFY,
  READY,
  META,
}

export enum Protocal {
  SATORI = 'Satori',
}

export enum CommMethod {
  WEBSOCKET = 'WebSocket Server',
  HTTP = 'Web Hook',
}
