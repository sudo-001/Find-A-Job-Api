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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const job_service_1 = require("./job.service");
const swagger_1 = require("@nestjs/swagger");
const Job_dto_1 = require("../../database/Dtos/Job/Job.dto");
let JobController = class JobController {
    constructor(jobService) {
        this.jobService = jobService;
    }
    getAll() {
        return this.jobService.getAll();
    }
    getRecent() {
        return this.jobService.getRecent();
    }
    async getOneJob(jobId) {
        const job = await this.jobService.getOneJob(jobId);
        if (job)
            return job;
        throw new common_1.HttpException("Le Job n'a pas été trouvé", common_1.HttpStatus.NOT_FOUND);
    }
    async getAvaiblesJobs() {
        const jobs = await this.jobService.getAvailablesJobs();
        if (jobs.length != 0)
            return jobs;
        throw new common_1.HttpException("Aucun jobs ouvert n'est disponible pour l'instant", common_1.HttpStatus.NOT_FOUND);
    }
    createJob(job) {
        return this.jobService.createJob(job);
    }
    async updateJob(jobId, job) {
        return await this.jobService.updateJob(jobId, job);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Get)('recents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getRecent", null);
__decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Get)(":job_id"),
    __param(0, (0, common_1.Param)("job_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getOneJob", null);
__decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Get)("/available"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getAvaiblesJobs", null);
__decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Job_dto_1.JobDto]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "createJob", null);
__decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Put)("/update/:job_id"),
    __param(0, (0, common_1.Param)("job_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Job_dto_1.JobDto]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "updateJob", null);
JobController = __decorate([
    (0, common_1.Controller)('job'),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobController);
exports.JobController = JobController;
//# sourceMappingURL=job.controller.js.map