import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobEntity } from "../Job/Job.Entity";
import { ImageEntity } from "../Image/Image.Entity";

@Entity('Utilisateur')
export class UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column({ unique: true })
    email: string;

    @Column()
    mot_de_passe: string;

    // Stock un tableau de poste préférés
    @Column()
    postes_preferes: string;

    @CreateDateColumn()
    created: Date;

    @Column({
        default: 'user'
    })
    type: string;

    // @BeforeInsert()
    // setType() {
    //     this.type = "user";
    // }
    
    // @BeforeInsert()
    // setCreatedDate() {
    //     this.created = new Date();
    // }

    @OneToOne(type => ImageEntity)
    @JoinTable()
    photo_de_profil: ImageEntity;

    @ManyToMany(type => JobEntity)
    job_favoris: JobEntity[];

    @ManyToMany(type => JobEntity)
    job_applications: JobEntity[];
    
}