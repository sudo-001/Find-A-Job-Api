import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ type: 'text', array: true, default: [] })
    postes_preferes: string[];

    @Column({ nullable: true })
    created: Date;

    @Column()
    type: string;

    @BeforeInsert()
    setType() {
        this.type = "user";
    }
    
    @BeforeInsert()
    setCreatedDate() {
        this.created = new Date();
    }

    @OneToMany(type => ImageEntity, image => image.utilisateur)
    photo_de_profil: string;

    @ManyToMany(type => JobEntity)
    @JoinTable({
        name: "Job_favoris"
    })
    job_favoris: JobEntity[];

    @ManyToMany(type => JobEntity)
    @JoinTable({
        name: "Job_applications",
    })
    job_applications: JobEntity[];
    
}