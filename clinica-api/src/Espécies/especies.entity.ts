import { from } from "node:stream/iter";
import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'
@Entity ('especies')
export class Especie{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column ({length:100})
    nomePopular!:string;

    @Column ({length:100})
    nomeCientifico!:string;

    @Column ({length:200})
    descricao!:string;

    @Column ({default:true})
    domestico!:boolean;

    @Column ({default:true})
    ativo!:boolean;
}