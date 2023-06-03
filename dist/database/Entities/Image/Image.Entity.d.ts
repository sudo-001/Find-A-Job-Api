import { EntrepriseEntity } from "../Entreprise/Entreprise.Entity";
import { UtilisateurEntity } from "../Utilisateur/Utilisateur.Entity";
export declare class ImageEntity {
    id: number;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
    entrprise_profil: EntrepriseEntity;
    entrprise_coverture: EntrepriseEntity;
    utilisateur: UtilisateurEntity;
}
