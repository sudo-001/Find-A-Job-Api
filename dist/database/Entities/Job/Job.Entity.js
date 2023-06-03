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
exports.JobEntity = void 0;
const typeorm_1 = require("typeorm");
const Entreprise_Entity_1 = require("../Entreprise/Entreprise.Entity");
const Utilisateur_Entity_1 = require("../Utilisateur/Utilisateur.Entity");
let JobEntity = class JobEntity {
    setCreatedDate() {
        this.created = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], JobEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "type_de_contrat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, default: [] }),
    __metadata("design:type", Array)
], JobEntity.prototype, "competences", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "niveau_expertise", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "lieu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "salaire", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], JobEntity.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], JobEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobEntity.prototype, "setCreatedDate", null);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Entreprise_Entity_1.EntrepriseEntity, entreprise => entreprise.jobs),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Entreprise_Entity_1.EntrepriseEntity)
], JobEntity.prototype, "entreprise", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => Utilisateur_Entity_1.UtilisateurEntity),
    __metadata("design:type", Array)
], JobEntity.prototype, "favoriseur", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => Utilisateur_Entity_1.UtilisateurEntity),
    __metadata("design:type", Array)
], JobEntity.prototype, "postulant", void 0);
JobEntity = __decorate([
    (0, typeorm_1.Entity)("Job")
], JobEntity);
exports.JobEntity = JobEntity;
//# sourceMappingURL=Job.Entity.js.map