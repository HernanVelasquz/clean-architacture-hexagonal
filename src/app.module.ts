import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './infrastructure/config/database.config';
import { ShareModule } from './share.module';
import { PersonRepository } from './infrastructure/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    ShareModule,
  ],
  controllers: [],
  providers: [PersonRepository],
})
export class AppModule {}
