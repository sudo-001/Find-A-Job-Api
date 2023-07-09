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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrepriseEntity = void 0;
const typeorm_1 = require("typeorm");
const Job_Entity_1 = require("../Job/Job.Entity");
const Image_Entity_1 = require("../Image/Image.Entity");
let EntrepriseEntity = class EntrepriseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EntrepriseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "num\u00E9ro_de_telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "site_web", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EntrepriseEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Image_Entity_1.ImageEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "image_profil", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Image_Entity_1.ImageEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", String)
], EntrepriseEntity.prototype, "image_de_couverture", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Job_Entity_1.JobEntity, job => job.entreprise),
    __metadata("design:type", Array)
], EntrepriseEntity.prototype, "jobs", void 0);
EntrepriseEntity = __decorate([
    (0, typeorm_1.Entity)('Entreprise')
], EntrepriseEntity);
exports.EntrepriseEntity = EntrepriseEntity;
//# sourceMappingURL=Entreprise.Entity.js.map