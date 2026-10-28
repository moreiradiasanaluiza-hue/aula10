import { from } from "node:stream/iter";
import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('racas')
export class Raca{
    @PrimaryGeneratedColumn()
    id1:number;

    @Column ({length:100})
    nome!: string;

    @Column ({length:20})
    porte!:string;

    @Column ({length:150})
    descricao!: string;

    @Column ({type:'int'})
    expctativaVida!: number;

    @Column ({default:true})
    ativo!:boolean;
}