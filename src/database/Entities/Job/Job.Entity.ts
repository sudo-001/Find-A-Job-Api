import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    // Stock un tableau de compétences
    @Column()
    competences: string;

    @Column()
    niveau_expertise: string;

    @Column()
    lieu: string;

    @Column()
    salaire: string;

    @Column()
    deadline: Date;

    @Column()
    remote: boolean;
    
    @Column({ default: 1 })
    nombre_poste: number;
    
    @CreateDateColumn()
    created: Date;
    
    // @BeforeInsert()
    // setCreatedDate() {
    //     this.created = new Date();
    // }

    @ManyToOne(type => EntrepriseEntity, entreprise => entreprise.jobs)
    @JoinTable()
    entreprise: EntrepriseEntity;

    @ManyToMany(type => UtilisateurEntity)
    @JoinTable()
    favoriseur: UtilisateurEntity[];

    @ManyToMany(type => UtilisateurEntity)
    @JoinTable()
    postulant: UtilisateurEntity[];

}