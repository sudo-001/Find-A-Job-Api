import { EntrepriseEntity } from "../Entreprise/Entreprise.Entity";
import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";
export declare class JobEntity {
    id: number;
    titre: string;
    type_de_contrat: string;
    description: string;
    competences: string;
    niveau_expertise: string;
    lieu: string;
    salaire: string;
    deadline: Date;
    remote: boolean;
    nombre_poste: number;
    created: Date;
    entreprise: EntrepriseEntity;
    favoriseur: UtilisateurEntity[];
    postulant: UtilisateurEntity[];
}
