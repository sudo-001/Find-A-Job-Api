import { EntrepriseEntity } from "../Entreprise/Entreprise.Entity";
import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";
export declare class JobEntity {
    id: number;
    titre: string;
    type_de_contrat: string;
    description: string;
    competences: string[];
    niveau_expertise: string;
    lieu: string;
    salaire: string;
    deadline: Date;
    created: Date;
    setCreatedDate(): void;
    entreprise: EntrepriseEntity;
    favoriseur: UtilisateurEntity[];
    postulant: UtilisateurEntity[];
}
