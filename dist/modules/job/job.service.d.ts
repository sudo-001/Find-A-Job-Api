import { JobDto } from 'src/database/Dtos/Job/Job.dto';
import { JobEntity } from 'src/database/Entities/Job/Job.Entity';
import { Repository } from 'typeorm';
export declare class JobService {
    private readonly jobRepository;
    constructor(jobRepository: Repository<JobEntity>);
    getAll(): Promise<JobEntity[]>;
    getRecent(): Promise<JobEntity[]>;
    getOneJob(jobId: number): Promise<JobEntity>;
    getAvailablesJobs(): Promise<JobEntity[]>;
    createJob(job: JobDto): Promise<JobDto & JobEntity>;
    updateJob(jobId: number, jobToUpdate: JobDto): Promise<import("typeorm").UpdateResult>;
}
