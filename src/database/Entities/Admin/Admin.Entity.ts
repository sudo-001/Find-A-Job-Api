import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Admin")
export class AdminEntity extends UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({
    //     default: 'admin'
    // })
    // type: string;

    // @BeforeInsert()
    // setType() {
    //     this.type = "admin";
    // }
}