"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const job_module_1 = require("./modules/job/job.module");
const utilisateur_module_1 = require("./modules/utilisateur/utilisateur.module");
const Entreprise_Entity_1 = require("./database/Entities/Entreprise/Entreprise.Entity");
const Image_Entity_1 = require("./database/Entities/Image/Image.Entity");
const Utilisateur_Entity_1 = require("./database/Entities/Utilisateur/Utilisateur.Entity");
const Job_Entity_1 = require("./database/Entities/Job/Job.Entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'FindAJobDB',
                entities: [Entreprise_Entity_1.EntrepriseEntity, Image_Entity_1.ImageEntity, Utilisateur_Entity_1.UtilisateurEntity, Job_Entity_1.JobEntity],
                synchronize: false,
            }), job_module_1.JobModule, utilisateur_module_1.UtilisateurModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map