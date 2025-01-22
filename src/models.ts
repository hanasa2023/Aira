import type { ChannelType, LoginSatatus, Opcode } from './enums'

export interface Channel {
  id: string
  type: ChannelType
  name?: string
  parent_id?: string
}

export interface Guild {
  id: string
  name?: string
  avatar?: string
}

export interface GuildMember {
  user?: User
  nick?: string
  avatar?: string
  joined_at?: number
}

export interface GuildRole {
  id: string
  name?: string
}

export interface Argv {
  name: string
  arguments: any[]
  options: object
}

export interface Button {
  id: string
}

export interface Login {
  sn: number
  platform?: string
  user?: User
  status: LoginSatatus
  adapter: string
  features?: string[]
}

export interface Message {
  id: string
  content: string
  channel?: Channel
  guild?: Guild
  member?: GuildMember
  user?: User
  created_at?: number
  updated_at?: number
}

export interface User {
  id: string
  name?: string
  nick?: string
  avatar?: string
  is_bot?: boolean
}

export interface Op {
  op: Opcode
  body?: IdentifyBody | ReadyBody | IEvent
}

export interface IdentifyBody {
  token?: string
  sn?: number
}

export interface ReadyBody {
  logins: Login[]
  proxy_urls: string[]
}

export interface MetaBody {
  proxy_urls: string[]
}

export interface IEvent {
  sn: number
  type: string
  timestamp: number
  login: Login
  argv?: Argv
  button?: Button
  channel?: Channel
  guild?: Guild
  member?: GuildMember
  message?: Message
  operator?: User
  role?: GuildRole
  user?: User
}
