import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @CreateDateColumn()
    created: Date;

    @OneToOne(() => ImageEntity)
    @JoinColumn()
    image_profil: string;

    @OneToOne(type => ImageEntity)
    @JoinColumn()
    image_de_couverture: string;
    

    // @BeforeInsert()
    // setCreatedDate() {
    //     this.created = new Date();
    // }

    @OneToMany(type => JobEntity, job => job.entreprise)
    jobs: JobEntity[];
}