import { JobEntity } from "../Job/Job.Entity";
export declare class EntrepriseEntity {
    id: number;
    nom: string;
    description: string;
    adresse: string;
    email: string;
    numéro_de_telephone: string;
    site_web: string;
    image_profil: string;
    image_de_couverture: string;
    created: Date;
    setCreatedDate(): void;
    jobs: JobEntity[];
}
