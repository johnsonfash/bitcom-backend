import { PollingUnitService } from './polling-unit.service';
import { PollingUnitDto } from './dto';
export declare class PollingUnitController {
    private pollingUnitService;
    constructor(pollingUnitService: PollingUnitService);
    getAllPollingUnits(): Promise<unknown>;
    pollingUnit(id: number): Promise<unknown>;
    createPollingUnitAndResult(dto: PollingUnitDto, ip: string): Promise<unknown>;
}
