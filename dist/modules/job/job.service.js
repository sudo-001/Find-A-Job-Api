"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Job_Entity_1 = require("../../database/Entities/Job/Job.Entity");
const typeorm_2 = require("typeorm");
let JobService = class JobService {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    getAll() {
        return this.jobRepository.find({
            relations: ["entreprise", "favoriseur", "postulant"],
            order: { created: 'DESC' },
        });
    }
    getRecent() {
        return this.jobRepository.find({
            order: { created: 'DESC' },
            relations: ["entreprise", "favoriseur", "postulant"],
            take: 4,
        });
    }
    async getOneJob(jobId) {
        const job = await this.jobRepository.findOne({
            where: { id: jobId },
            relations: ["entreprise", "favoriseur", "postulant"]
        });
        return job;
    }
    async getAvailablesJobs() {
        const currentDate = new Date();
        return await this.jobRepository.find({
            where: { deadline: (0, typeorm_2.MoreThan)(currentDate) },
        });
    }
    async createJob(job) {
        console.log(job);
        return await this.jobRepository.save(job);
    }
    async updateJob(jobId, jobToUpdate) {
        const job = await this.jobRepository.findOne({
            where: { id: jobId }
        });
        if (!job)
            return null;
        return await this.jobRepository.update(jobId, jobToUpdate);
    }
};
JobService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Job_Entity_1.JobEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map