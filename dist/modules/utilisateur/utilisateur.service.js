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
exports.UtilisateurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Utilisateur_Entity_1 = require("../../database/Entities/Utilisateur/Utilisateur.Entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UtilisateurService = class UtilisateurService {
    constructor(utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }
    getAll() {
        return this.utilisateurRepository.find();
    }
    async getOneUser(userId) {
        return await this.utilisateurRepository.findOne({
            where: { id: userId }
        });
    }
    async createUser(user) {
        const userExist = await this.utilisateurRepository.findOne({
            where: {
                email: user.email
            }
        });
        if (user != null)
            return null;
        const hash = await bcrypt(user.mot_de_passe, 10);
        user.mot_de_passe = hash;
        return await this.utilisateurRepository.save(user);
    }
    async updateUser(userId, userToUpdate) {
        const user = await this.utilisateurRepository.findOne({
            where: { id: userId }
        });
        if (!user)
            return null;
        return await this.utilisateurRepository.update(userId, userToUpdate);
    }
};
UtilisateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Utilisateur_Entity_1.UtilisateurEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UtilisateurService);
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=utilisateur.service.js.map