import { Global, Module } from '@nestjs/common';
import { ConfigLoader } from './loader';
import { Config } from './config';

@Global()
@Module({
  providers: [
    {
      provide: Config,
      useFactory: () => {
        const rawConfig = ConfigLoader.load();
        return new Config(rawConfig);
      },
    },
  ],
  exports: [Config],
})
export class ConfigModule {}