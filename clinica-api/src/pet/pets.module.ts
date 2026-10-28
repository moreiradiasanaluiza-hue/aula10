import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { pet } from "./pet.entity.js"; 

@Module({
    imports:[
        TypeOrmModule.forFeature([pet])
    ]
})
export class PetModule{}