import { JobEntity } from "../Job/Job.Entity";
import { ImageEntity } from "../Image/Image.Entity";
export declare class UtilisateurEntity {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    mot_de_passe: string;
    postes_preferes: string;
    created: Date;
    type: string;
    photo_de_profil: ImageEntity;
    job_favoris: JobEntity[];
    job_applications: JobEntity[];
}
