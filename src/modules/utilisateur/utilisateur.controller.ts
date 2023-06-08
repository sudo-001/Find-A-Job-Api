import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(
        private readonly utilisateurService: UtilisateurService
    ) {}

    /**
     * 
     * @returns All signed up users on the website
     */
    @Get()
    getAll() {
        return this.utilisateurService.getAll();
    }

    /**
     * 
     * @param userId 
     * @returns An error or the finded user
     */
    @Get(":user_id")
    async getOneUser(@Param("user_id") userId: number) {
        const user = await this.utilisateurService.getOneUser(userId);

        if (user)
            return user;
        
        throw new HttpException("User Not Found", HttpStatus.NOT_FOUND)
    }

    /**
     * 
     * @param user 
     * @returns The user created
     */
    @Post()
    createUser(@Body() user: UtilisateurEntity) {
        return this.utilisateurService.createUser(user);
    }

    /**
     * 
     * @param userId 
     * @param user 
     * @returns An error or the updated user
     */
    @Put("/update/:user_id")
    async updateUser(@Param("user_id") userId: number, @Body() user: UtilisateurEntity) {
        const res = await this.utilisateurService.updateUser(userId, user);

        if (res)
            return res;
        
        throw new HttpException("User Not Found", HttpStatus.NOT_FOUND);
    }

    
}
