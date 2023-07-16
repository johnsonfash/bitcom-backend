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
const config_1 = require("@nestjs/config");
const mysql_module_1 = require("./mysql/mysql.module");
const lga_module_1 = require("./lga/lga.module");
const polling_unit_module_1 = require("./polling-unit/polling-unit.module");
const hello_module_1 = require("./hello/hello.module");
const agent_module_1 = require("./agent/agent.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }), mysql_module_1.MysqlModule, lga_module_1.LgaModule, polling_unit_module_1.PollingUnitModule, hello_module_1.HelloModule, agent_module_1.AgentModule]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map