import { Undefined } from '@main/typings/generic.typing'
import { CookieJar } from 'tough-cookie'

const context = ['ipc'] as const

export type AppContextType = (typeof context)[number]

export interface ContextKeys {
  logger: {
    transactionId: string
    context: AppContextType
    channel: string
  }
  cookieJar: CookieJar
  user: {
    accountId: number
    ikariamToken: string
    blackbox: string
  }
  ikariamServer: {
    accountId: number
    language: string
    number: number
  }
  ikariamWorld: {
    cookie: string
    actionRequest: Undefined<string>
  }
}
