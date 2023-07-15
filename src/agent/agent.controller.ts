import { Controller, Get } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller('agents')
export class AgentController {
  constructor(private agentServie: AgentService) { }

  @Get('/')
  getAgents() {
    return this.agentServie.getAgents();
  }

}
