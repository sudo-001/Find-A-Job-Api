import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
import { Repository } from 'typeorm';
import { UtilisateurDto } from 'src/database/Dtos/Utilisateur/Utilisateur.dto';
export declare class UtilisateurService {
    private readonly utilisateurRepository;
    constructor(utilisateurRepository: Repository<UtilisateurEntity>);
    getAll(): Promise<UtilisateurEntity[]>;
    getOneUser(userId: number): Promise<UtilisateurEntity>;
    createUser(user: UtilisateurDto): Promise<UtilisateurDto & UtilisateurEntity>;
    updateUser(userId: number, userToUpdate: UtilisateurDto): Promise<import("typeorm").UpdateResult>;
}
