import { Module } from '@nestjs/common';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurEntity } from 'src/database/Entities/Utilisateur/Utilisateur.Entity';
import { ImageEntity } from 'src/database/Entities/Image/Image.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([UtilisateurEntity, ImageEntity])],
  controllers: [UtilisateurController],
  providers: [UtilisateurService]
})
export class UtilisateurModule {}
