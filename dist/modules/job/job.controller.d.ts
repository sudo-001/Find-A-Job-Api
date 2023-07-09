import { JobService } from './job.service';
import { JobDto } from 'src/database/Dtos/Job/Job.dto';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    getAll(): Promise<import("../../database/Entities/Job/Job.Entity").JobEntity[]>;
    getRecent(): Promise<import("../../database/Entities/Job/Job.Entity").JobEntity[]>;
    getOneJob(jobId: number): Promise<import("../../database/Entities/Job/Job.Entity").JobEntity>;
    getAvaiblesJobs(): Promise<import("../../database/Entities/Job/Job.Entity").JobEntity[]>;
    createJob(job: JobDto): Promise<JobDto & import("../../database/Entities/Job/Job.Entity").JobEntity>;
    updateJob(jobId: number, job: JobDto): Promise<import("typeorm").UpdateResult>;
}
