import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Especie } from "./especies.entity.js";

@Module({
    imports:[
        TypeOrmModule.forFeature([Especie])
    ]
})
export class EspecieModule{}