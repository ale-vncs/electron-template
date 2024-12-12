import { DynamicModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { systemConfig } from '@main/config/system.config'

export const configModuleConfig: DynamicModule = ConfigModule.forRoot({
  load: [systemConfig],
  isGlobal: true
})
