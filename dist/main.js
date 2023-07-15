"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const common_2 = require("./common");
const PORT = process.env.PORT || 5000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useGlobalFilters(new common_2.HttpExceptionFilter());
    app.useGlobalInterceptors(new common_2.TransformInterceptor());
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map