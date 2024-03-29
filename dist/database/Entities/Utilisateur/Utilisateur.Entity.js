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
exports.UtilisateurEntity = void 0;
const typeorm_1 = require("typeorm");
const Job_Entity_1 = require("../Job/Job.Entity");
const Image_Entity_1 = require("../Image/Image.Entity");
let UtilisateurEntity = class UtilisateurEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UtilisateurEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UtilisateurEntity.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UtilisateurEntity.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UtilisateurEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UtilisateurEntity.prototype, "mot_de_passe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UtilisateurEntity.prototype, "postes_preferes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UtilisateurEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'user'
    }),
    __metadata("design:type", String)
], UtilisateurEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Image_Entity_1.ImageEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Image_Entity_1.ImageEntity)
], UtilisateurEntity.prototype, "photo_de_profil", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => Job_Entity_1.JobEntity),
    __metadata("design:type", Array)
], UtilisateurEntity.prototype, "job_favoris", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => Job_Entity_1.JobEntity),
    __metadata("design:type", Array)
], UtilisateurEntity.prototype, "job_applications", void 0);
UtilisateurEntity = __decorate([
    (0, typeorm_1.Entity)('Utilisateur')
], UtilisateurEntity);
exports.UtilisateurEntity = UtilisateurEntity;
//# sourceMappingURL=Utilisateur.Entity.js.map