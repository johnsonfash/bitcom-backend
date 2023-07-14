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
exports.LgaService = void 0;
const common_1 = require("@nestjs/common");
const mysql_service_1 = require("../mysql/mysql.service");
let LgaService = exports.LgaService = class LgaService {
    constructor(mysql) {
        this.mysql = mysql;
    }
    async getAllLgas() {
        return await this.mysql.query(`select * from lga`);
    }
    async getLgaResult(lgaId) {
        return await this.mysql
            .query(`SELECT lga.uniqueid, lga.lga_name, announced_pu_results.party_abbreviation, SUM(party_score) AS total, announced_pu_results.date_entered FROM announced_pu_results LEFT JOIN polling_unit ON announced_pu_results.polling_unit_uniqueid = polling_unit.uniqueid LEFT JOIN lga ON lga.lga_id = polling_unit.lga_id WHERE lga.uniqueid = ? GROUP BY party_abbreviation`, [lgaId]);
    }
};
exports.LgaService = LgaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_service_1.MysqlService])
], LgaService);
//# sourceMappingURL=lga.service.js.map