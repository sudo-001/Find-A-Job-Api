import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
import { Repository } from 'typeorm';
export declare class UtilisateurService {
    private readonly utilisateurRepository;
    constructor(utilisateurRepository: Repository<UtilisateurEntity>);
    getAll(): Promise<UtilisateurEntity[]>;
    getOneUser(userId: number): Promise<UtilisateurEntity>;
    createUser(user: UtilisateurEntity): Promise<UtilisateurEntity>;
    updateUser(userId: number, userToUpdate: UtilisateurEntity): Promise<import("typeorm").UpdateResult>;
}
