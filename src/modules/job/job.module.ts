import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEntity } from 'src/database/Entities/Job/Job.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobEntity])],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
