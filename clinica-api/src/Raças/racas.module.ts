import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Raca } from "./racas.entity.js";

@Module({
    imports:[
        TypeOrmModule.forFeature([Raca])
    ]
})
export class RacaModule{}