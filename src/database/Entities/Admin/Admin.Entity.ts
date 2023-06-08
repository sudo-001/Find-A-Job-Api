import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";
import { BeforeInsert, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Admin")
export class AdminEntity extends UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @BeforeInsert()
    setType() {
        this.type = "admin";
    }
}