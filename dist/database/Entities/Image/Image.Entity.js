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
exports.ImageEntity = void 0;
const typeorm_1 = require("typeorm");
const Entreprise_Entity_1 = require("../Entreprise/Entreprise.Entity");
const Utilisateur_Entity_1 = require("../Utilisateur/Utilisateur.Entity");
let ImageEntity = class ImageEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ImageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "fieldname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "originalname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "encoding", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "mimetype", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ImageEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Entreprise_Entity_1.EntrepriseEntity, entreprise => entreprise.image_profil, { nullable: true }),
    __metadata("design:type", Entreprise_Entity_1.EntrepriseEntity)
], ImageEntity.prototype, "entrprise_profil", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Entreprise_Entity_1.EntrepriseEntity, entreprise => entreprise.image_de_couverture, { nullable: true }),
    __metadata("design:type", Entreprise_Entity_1.EntrepriseEntity)
], ImageEntity.prototype, "entrprise_coverture", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Utilisateur_Entity_1.UtilisateurEntity, utilisateur => utilisateur.photo_de_profil, { nullable: true }),
    __metadata("design:type", Utilisateur_Entity_1.UtilisateurEntity)
], ImageEntity.prototype, "utilisateur", void 0);
ImageEntity = __decorate([
    (0, typeorm_1.Entity)('Image')
], ImageEntity);
exports.ImageEntity = ImageEntity;
//# sourceMappingURL=Image.Entity.js.map