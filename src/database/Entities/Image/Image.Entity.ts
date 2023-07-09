import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntrepriseEntity } from "../Entreprise/Entreprise.Entity";
import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";

@Entity('Image')
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fieldname: string;

    @Column()
    originalname: string;

    @Column()
    encoding: string;
    
    @Column()
    mimetype: string;

    @Column()
    destination: string;
    
    @Column()
    filename: string;
    
    @Column()
    path: string;
    
    @Column()
    size: number;

    // @OneToOne(type => EntrepriseEntity, entreprise => entreprise.image_profil)
    // entreprise_profil: EntrepriseEntity;

    // @ManyToOne(type => EntrepriseEntity, entreprise => entreprise.image_de_couverture)
    // entrprise_coverture: EntrepriseEntity;

    // @ManyToOne(type => UtilisateurEntity, utilisateur => utilisateur.photo_de_profil)
    // utilisateur: UtilisateurEntity;
}