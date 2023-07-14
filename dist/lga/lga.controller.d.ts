import { LgaService } from './lga.service';
export declare class LgaController {
    private lgaService;
    constructor(lgaService: LgaService);
    getAllLgas(): Promise<unknown>;
    getLgaResult(id: number): Promise<unknown>;
}
