import { BeforeInsert, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntrepriseEntity } from "../Entreprise/Entreprise.Entity";
import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";

@Entity("Job")
export class JobEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    type_de_contrat: string;

    @Column()
    description: string;

    @Column({ type: 'text', array: true, default: []})
    competences: string[];

    @Column()
    niveau_expertise: string;

    @Column()
    lieu: string;

    @Column()
    salaire: string;

    @Column()
    deadline: Date;

    @Column({ nullable: true })
    created: Date;

    @BeforeInsert()
    setCreatedDate() {
        this.created = new Date();
    }

    @ManyToOne(type => EntrepriseEntity, entreprise => entreprise.jobs)
    @JoinColumn()
    entreprise: EntrepriseEntity;

    @ManyToMany(type => UtilisateurEntity)
    favoriseur: UtilisateurEntity[];

    @ManyToMany(type => UtilisateurEntity)
    postulant: UtilisateurEntity[];

}