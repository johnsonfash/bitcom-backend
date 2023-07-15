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
exports.PollingUnitService = void 0;
const common_1 = require("@nestjs/common");
const mysql_service_1 = require("../mysql/mysql.service");
let PollingUnitService = exports.PollingUnitService = class PollingUnitService {
    constructor(mysql) {
        this.mysql = mysql;
    }
    async getPollingUnitResults(pollingUnit) {
        return await this.mysql
            .execute(`select 
    polling_unit.*,
    announced_pu_results.* 
    from polling_unit left join announced_pu_results 
    on polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid 
    where polling_unit.uniqueid = ?`, [pollingUnit]);
    }
    async getAllPollingUnits() {
        return await this.mysql.query(`select uniqueid, polling_unit_name, polling_unit_number, lat, long from polling_unit`);
    }
    async createPollingUnitResult(dto, ip) {
        const results = dto.results.map(result => ([dto.pollingUnitId, result.party, result.score, dto.name, new Date().toISOString().slice(0, 19).replace('T', ' '), ip]));
        return await this.mysql.query(`insert into announced_pu_results (polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address) values ?`, [results]);
    }
};
exports.PollingUnitService = PollingUnitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_service_1.MysqlService])
], PollingUnitService);
//# sourceMappingURL=polling-unit.service.js.map