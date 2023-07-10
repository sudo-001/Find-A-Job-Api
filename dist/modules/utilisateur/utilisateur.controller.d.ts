import { UtilisateurService } from './utilisateur.service';
import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
import { UtilisateurDto } from 'src/database/Dtos/Utilisateur/Utilisateur.dto';
export declare class UtilisateurController {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    getAll(): Promise<UtilisateurEntity[]>;
    getOneUser(userId: number): Promise<UtilisateurEntity>;
    createUser(user: UtilisateurDto): Promise<UtilisateurDto & UtilisateurEntity>;
    updateUser(userId: number, user: UtilisateurDto): Promise<import("typeorm").UpdateResult>;
}
