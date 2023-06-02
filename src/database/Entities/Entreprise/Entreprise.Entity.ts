import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { JobEntity } from "../Job/Job.Entity";
import { ImageEntity } from "../Image/Image.Entity";

@Entity('Entreprise')
export class EntrepriseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @Column()
    adresse: string;

    @Column({ unique: true })
    email: string;

    @Column()
    numéro_de_telephone: string;

    @Column({ nullable: true })
    site_web: string;

    @OneToMany(type => ImageEntity, image => image.entrprise_profil, { nullable: true })
    image_profil: string;

    @OneToMany(type => ImageEntity, image => image.entrprise_coverture, { nullable: true })
    image_de_couverture: string;

    @Column({ nullable: true })
    created: Date;

    @BeforeInsert()
    setCreatedDate() {
        this.created = new Date();
    }

    @OneToMany(type => JobEntity, job => job.entreprise)
    jobs: JobEntity[];
}