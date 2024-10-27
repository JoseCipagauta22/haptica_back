/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
// import path from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const httpsOptions = {
    key: fs.readFileSync('./../haptica-back/src/clave_privada.key'), 
    cert: fs.readFileSync('./../haptica-back/src/certificado.crt'),
  };

  app.enableCors({
      // origin: '*', // Change this to your frontend origin
      // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      // credentials: true,
    }
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The haptica API description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const server = https.createServer(httpsOptions, app.getHttpAdapter().getInstance());

  // Iniciar el servidor en el puerto 443
  
  server.listen(process.env.PORT || 3000, () => {
    console.log('Servidor HTTPS escuchando en el puerto');
  });

  // Manejo de errores
  server.on('error', (error) => {
    console.error('Error en el servidor:', error);
  });


  // await app.listen(process.env.PORT || 3000, httpsOptions);
}
bootstrap();
