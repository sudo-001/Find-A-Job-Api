import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(UtilisateurEntity)
        private readonly utilisateurRepository: Repository<UtilisateurEntity>
    ){}

    /**
     * Fonction pour avoir tout les utilisateurs présent sur la plateforme
     */
    getAll() {
        return this.utilisateurRepository.find();
    }

    async getOneUser(userId: number) {
        return await this.utilisateurRepository.findOne({
            where: { id: userId }
        })
    }

    /**
     * 
     * @param user 
     * @returns The user created
     */
    async createUser(user: UtilisateurEntity) {
        // return this.utilisateurRepository.save(user)
        const userExist = await this.utilisateurRepository.findOne({
            where: {
                email: user.email
            }
        })

        if (user != null)
            return null;

        const hash = await bcrypt(user.mot_de_passe, 10)
        user.mot_de_passe = hash;

        return await this.utilisateurRepository.save(user);
    }

    /**
     * 
     * @param userId 
     * @param userToUpdate 
     * @returns The user updated
     */
    async updateUser(userId: number, userToUpdate: UtilisateurEntity) {
        const user = await this.utilisateurRepository.findOne({
            where: { id: userId}
        });

        if (!user)
            return null;
        
        return await this.utilisateurRepository.update(userId, userToUpdate);
    }
}
