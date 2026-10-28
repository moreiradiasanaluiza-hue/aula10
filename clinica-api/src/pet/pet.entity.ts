import { from } from "node:stream/iter";
import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('pet')
export class pet{

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    nome!:string;

    @Column({type:'int'})
    dataNascimento!:Date;

    @Column({length:15})
    sexo!:string;

    @Column ({type:'int'})
    peso:number;

    @Column ({length:15})
    cor!:string;

    @Column({default:true})
    castrado!:boolean;

    @Column ({default:true})
    ativo: boolean;
}