import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobEntity } from 'src/database/Entities/Job/Job.Entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class JobService {

    constructor(
        @InjectRepository(JobEntity)
        private readonly jobRepository: Repository<JobEntity>
    ) {}

    /**
     * Fonction pour avoir la liste de tout les jobs confondus dans la base de donnée
     */
    getAll(): Promise<any> {
        return this.jobRepository.find({
            relations: ["entreprise","favoriseur","postulant"]
        });
    }

    /**
     * Fonction pour avoir un job spécifique grâce à son ID
     */
    async getOneJob(jobId: number): Promise<JobEntity> {
        const job = await this.jobRepository.findOne({
            where: { id: jobId},
            relations: ["entreprise","favoriseur","postulant"]
        });

        return job;
    }


    /**
     * Fonction qui retourne la liste de tout les jobs disponibles (ou ouverts) dans la base de données
     */
    async getAvailablesJobs() {
        const currentDate = new Date()
        return await this.jobRepository.find({
            where: { deadline: MoreThan(currentDate)},
        });
    }

    /**
     * Fonction pour ajouter un job
     */
    async createJOb(job: JobEntity) {
        return await this.jobRepository.save(job);
    }

    /**
     * Fonction pour modifier le statut d'un job au lieu de le supprimer totalement
     */
    

}
