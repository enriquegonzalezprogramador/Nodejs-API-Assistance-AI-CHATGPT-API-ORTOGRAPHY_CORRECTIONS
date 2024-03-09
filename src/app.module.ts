import { Module } from '@nestjs/common';
import { GtpModule } from './gtp/gtp.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [GtpModule,
    ConfigModule.forRoot()
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
