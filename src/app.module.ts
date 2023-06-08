import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './modules/job/job.module';
import { UtilisateurModule } from './modules/utilisateur/utilisateur.module';
import { EntrepriseEntity } from './database/Entities/Entreprise/Entreprise.Entity';
import { ImageEntity } from './database/Entities/Image/Image.Entity';
import { UtilisateurEntity } from './database/Entities/Utilisateur/Utilisateur.Entity';
import { JobEntity } from './database/Entities/Job/Job.Entity';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    // type: 'mysql',
    type: 'sqlite',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: '',
    database: 'FindAJobDB',
    entities: [EntrepriseEntity, ImageEntity, UtilisateurEntity, JobEntity],
    synchronize: false,
  }), JobModule, UtilisateurModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
