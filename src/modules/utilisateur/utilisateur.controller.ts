import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UtilisateurDto } from 'src/database/Dtos/Utilisateur/Utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(
        private readonly utilisateurService: UtilisateurService
    ) {}

    /**
     * 
     * @returns All signed up users on the website
     */
    @ApiTags('Users')
    @ApiOperation({ summary: 'Get all the user',description: "A route to get informations of a all the users registered on the website"})
    @Get()
    getAll() {
        return this.utilisateurService.getAll();
    }

    /**
     * 
     * @param userId 
     * @returns An error or the finded user
     */
    @ApiTags('Users')
    @ApiOperation({ summary: 'Get a specify user',description: "A route to get informations of a specific user by entering their 'id' "})
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
    @ApiTags('Users')
    @ApiOperation({ summary: 'Create a new user',description: "A route to create a new user by entering their informations"})
    @Post()
    createUser(@Body() user: UtilisateurDto) {
        return this.utilisateurService.createUser(user);
    }

    /**
     * 
     * @param userId 
     * @param user 
     * @returns An error or the updated user
     */
    @ApiTags('Users')
    @ApiOperation({ summary: 'Update a specify user',description: "A route to update informations of a specify user by entering their 'id' and the new informations"})
    @Put("/update/:user_id")
    async updateUser(@Param("user_id") userId: number, @Body() user: UtilisateurDto) {
        const res = await this.utilisateurService.updateUser(userId, user);

        if (res)
            return res;
        
        throw new HttpException("User Not Found", HttpStatus.NOT_FOUND);
    }

    
}
