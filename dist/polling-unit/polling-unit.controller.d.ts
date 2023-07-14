import { PollingUnitService } from './polling-unit.service';
export declare class PollingUnitController {
    private pollingUnitService;
    constructor(pollingUnitService: PollingUnitService);
    pollingUnit(id: number): Promise<unknown>;
}
