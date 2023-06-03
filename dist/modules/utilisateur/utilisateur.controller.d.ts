import { UtilisateurService } from './utilisateur.service';
import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
export declare class UtilisateurController {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    getAll(): Promise<UtilisateurEntity[]>;
    getOneUser(userId: number): Promise<UtilisateurEntity>;
    createUser(user: UtilisateurEntity): Promise<UtilisateurEntity>;
    updateUser(userId: number, user: UtilisateurEntity): Promise<import("typeorm").UpdateResult>;
}
