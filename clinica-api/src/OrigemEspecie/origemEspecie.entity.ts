import { from } from "node:stream/iter";
import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('origem')
export class Origem{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column ({length:30})
    continenteOrigem!:string;

    @Column ({length:15})
    pais!:string;

    @Column ({length:30})
    regiao!:string;

    @Column ({length:200})
    descricao!:string;

    @Column({default:true})
    ativo!:boolean;
}