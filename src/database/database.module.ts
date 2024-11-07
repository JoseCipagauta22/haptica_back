import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';
import { Category } from 'src/categories/entities/category.entity';
import { Item } from 'src/categories/entities/item.entity';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      
      useFactory: (configType: ConfigType<typeof config>) => {
        const { user, host, name, password, port, ssl } = configType.dataBase;
        console.log(typeof ssl, ssl);
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: name,
          // synchronize: false,
          autoLoadEntities: true,
          // url: 'postgres://user:123456@host:3000/database?ssl=true',
          // ssl: false,
          // extra: {
          //   ssl:true
          //     ? {
          //         rejectUnauthorized: true,
          //       }
          //     : null,
          // }
          // {
          //   rejectUnauthorized: false
          // },
          // ssl: ssl.valueOf(),
          // extra: {
            // ssl: ssl
          // }
          ssl: ssl === 'true',
          extra: {
            ssl: 
              ssl === 'true'
                ? {
                    rejectUnauthorized: false
                  }
                : null
          },
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (configType: ConfigType<typeof config>) => {
        const { user, host, name, password, port } = configType.dataBase;
        const client = new Client({
          user,
          host,
          database: name,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
      // useValue: client,
    },
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
