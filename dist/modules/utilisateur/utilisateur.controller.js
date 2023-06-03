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
exports.UtilisateurController = void 0;
const common_1 = require("@nestjs/common");
const utilisateur_service_1 = require("./utilisateur.service");
const Utilisateur_Entity_1 = require("../../database/Entities/Utilisateur/Utilisateur.Entity");
let UtilisateurController = class UtilisateurController {
    constructor(utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    getAll() {
        return this.utilisateurService.getAll();
    }
    async getOneUser(userId) {
        const user = await this.utilisateurService.getOneUser(userId);
        if (user)
            return user;
        throw new common_1.HttpException("User Not Found", common_1.HttpStatus.NOT_FOUND);
    }
    createUser(user) {
        return this.utilisateurService.createUser(user);
    }
    async updateUser(userId, user) {
        const res = await this.utilisateurService.updateUser(userId, user);
        if (res)
            return res;
        throw new common_1.HttpException("User Not Found", common_1.HttpStatus.NOT_FOUND);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":user_id"),
    __param(0, (0, common_1.Param)("user_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "getOneUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Utilisateur_Entity_1.UtilisateurEntity]),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)("/update/:user_id"),
    __param(0, (0, common_1.Param)("user_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Utilisateur_Entity_1.UtilisateurEntity]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "updateUser", null);
UtilisateurController = __decorate([
    (0, common_1.Controller)('utilisateur'),
    __metadata("design:paramtypes", [utilisateur_service_1.UtilisateurService])
], UtilisateurController);
exports.UtilisateurController = UtilisateurController;
//# sourceMappingURL=utilisateur.controller.js.map