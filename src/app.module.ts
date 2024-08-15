import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './enviroments';
import { CategoriesModule } from './categories/categories.module';
import { FiguresModule } from './figures/figures.module';
import config from './config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV || '.env'],
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
      }),
    }),
    CategoriesModule,
    FiguresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
