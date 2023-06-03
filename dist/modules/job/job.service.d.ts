import { JobEntity } from 'src/database/Entities/Job/Job.Entity';
import { Repository } from 'typeorm';
export declare class JobService {
    private readonly jobRepository;
    constructor(jobRepository: Repository<JobEntity>);
    getAll(): Promise<any>;
    getOneJob(jobId: number): Promise<JobEntity>;
    getAvailablesJobs(): Promise<JobEntity[]>;
    createJob(job: JobEntity): Promise<JobEntity>;
    updateJob(jobId: number, jobToUpdate: JobEntity): Promise<import("typeorm").UpdateResult>;
}
