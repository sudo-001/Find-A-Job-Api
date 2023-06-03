import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { JobEntity } from 'src/database/Entities/Job/Job.Entity';

@Controller('job')
export class JobController {

    constructor (
        private readonly jobService: JobService
    ) {}

    /**
     * 
     * @returns All the job on the website
     */
    @Get()
    getAll() {
        return this.jobService.getAll();
    }

    /**
     * 
     * @param jobId 
     * @returns A specific job
     */
    @Get(":job_id")
    async getOneJob(@Param("job_id") jobId: number) {
        const job = await this.jobService.getOneJob(jobId);

        if (job)
            return job;

        throw new HttpException("Le Job n'a pas été trouvé", HttpStatus.NOT_FOUND);
    }

    /**
     * 
     * @returns All the available (or open) Jobs in the database
     */
    @Get("/available")
    async getAvaiblesJobs() {
        const jobs = await this.jobService.getAvailablesJobs();

        if (jobs.length != 0)
            return jobs;
        
        throw new HttpException("Aucun jobs ouvert n'est disponible pour l'instant", HttpStatus.NOT_FOUND)
    }

    /**
     * 
     * @param job 
     * @returns The created Job
     */
    @Post()
    createJob(@Body() job: JobEntity) {
        return this.jobService.createJob(job);
    }

    /**
     * 
     * @param jobId 
     * @returns The job with you value if updated or not_modified error else
     */
    @Put("/update/:job_id")
    async updateJob(@Param("job_id") jobId: number, @Body() job: JobEntity) {
        return await this.jobService.updateJob(jobId, job);
    }

}
