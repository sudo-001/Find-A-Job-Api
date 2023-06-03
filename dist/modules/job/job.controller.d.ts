import { JobService } from './job.service';
import { JobEntity } from 'src/database/Entities/Job/Job.Entity';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    getAll(): Promise<any>;
    getOneJob(jobId: number): Promise<JobEntity>;
    getAvaiblesJobs(): Promise<JobEntity[]>;
    createJob(job: JobEntity): Promise<JobEntity>;
    updateJob(jobId: number, job: JobEntity): Promise<import("typeorm").UpdateResult>;
}
