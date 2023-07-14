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
exports.PollingUnitController = void 0;
const common_1 = require("@nestjs/common");
const polling_unit_service_1 = require("./polling-unit.service");
const dto_1 = require("./dto");
let PollingUnitController = exports.PollingUnitController = class PollingUnitController {
    constructor(pollingUnitService) {
        this.pollingUnitService = pollingUnitService;
    }
    getAllPollingUnits() {
        return this.pollingUnitService.getAllPollingUnits();
    }
    pollingUnit(id) {
        return this.pollingUnitService.getPollingUnitResults(id);
    }
    createPollingUnitAndResult(dto, ip) {
        return this.pollingUnitService.createPollingUnitResult(dto, ip);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PollingUnitController.prototype, "getAllPollingUnits", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PollingUnitController.prototype, "pollingUnit", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PollingUnitDto, String]),
    __metadata("design:returntype", void 0)
], PollingUnitController.prototype, "createPollingUnitAndResult", null);
exports.PollingUnitController = PollingUnitController = __decorate([
    (0, common_1.Controller)('polling-units'),
    __metadata("design:paramtypes", [polling_unit_service_1.PollingUnitService])
], PollingUnitController);
//# sourceMappingURL=polling-unit.controller.js.map