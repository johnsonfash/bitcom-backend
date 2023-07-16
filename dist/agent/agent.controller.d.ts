import { AgentService } from './agent.service';
export declare class AgentController {
    private agentServie;
    constructor(agentServie: AgentService);
    getAgents(): Promise<unknown>;
}
