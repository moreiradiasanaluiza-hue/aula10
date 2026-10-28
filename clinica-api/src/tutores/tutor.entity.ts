import { from } from "node:stream/iter";
import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';
@Entity('tutores')
export class Tutor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length:100})
    nome!: string;

    @Column ({type:'int'})
    cpf!: number;

    @Column ({length:100})
    email!:string;

    @Column ({type:'int'})
    telefone!:number;

    @Column ({length:200})
    endereco!:string;

    @Column ({default:true})
    ativo!: boolean;
}