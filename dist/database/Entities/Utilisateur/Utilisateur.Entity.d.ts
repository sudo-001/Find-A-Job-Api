import { JobEntity } from "../Job/Job.Entity";
export declare class UtilisateurEntity {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    mot_de_passe: string;
    postes_preferes: string[];
    created: Date;
    setCreatedDate(): void;
    photo_de_profil: string;
    job_favoris: JobEntity[];
    job_applications: JobEntity[];
}
