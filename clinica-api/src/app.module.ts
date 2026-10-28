import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service.js';
import { Tutor } from './tutores/tutor.entity.js';


@Module({
  imports: [
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'12345678',
    database: 'clinica_bd',
   entities:[Tutor, Raca, Origem, pet, Especie],
    synchronize:true,
    logging:true,
    }),
  ],
})
export class AppModule {}
