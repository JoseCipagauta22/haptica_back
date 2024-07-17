/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import  config  from './config';

@Injectable()
export class AppService {
  // constructor
  constructor(
    @Inject('PG') private clientPg: Client,  
    @Inject(config.KEY) private configType: ConfigType<typeof config>
    /* private config: ConfigService */ 
  ) {}

  getHello(): string {
    return this.configType.dataBase.name;
  }

  getTask() {
    return new Promise((resolve, reject) =>{
      this.clientPg.query('SELECT * FROM categories', (err, res) => {
        if(err){
          reject(err);
        }
        resolve(res.rows);
      });      
    });
  }
}
