import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JobDto } from 'src/database/Dtos/Job/Job.dto';

@Controller('job')
export class JobController {

    constructor (
        private readonly jobService: JobService
    ) {}

    
    @ApiTags('Jobs')
    @ApiOperation({ summary: 'Get all the jobs',description: "A route to get informations of all the job on the website"})
    @Get()
    getAll() {
        return this.jobService.getAll();
    }

    @ApiTags('Jobs')
    @ApiOperation({ summary: 'Get all the recents jobs',description: "A route to get informations of a all the 4 most recents job on the website"})
    @Get('recents')
    getRecent() {
        return this.jobService.getRecent();
    }

    /**
     * 
     * @param jobId 
     * @returns A specific job
     */
    @ApiTags('Jobs')
    @ApiOperation({ summary: 'Get a specific job',description: "A route to get informations of a specific job on the website"})
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
    @ApiTags('Jobs')
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
    @ApiTags('Jobs')
    @Post()
    createJob(@Body() job: JobDto) {
        return this.jobService.createJob(job);
    }

    /**
     * 
     * @param jobId 
     * @returns The job with you value if updated or not_modified error else
     */
    @ApiTags('Jobs')
    @Put("/update/:job_id")
    async updateJob(@Param("job_id") jobId: number, @Body() job: JobDto) {
        return await this.jobService.updateJob(jobId, job);
    }

}
