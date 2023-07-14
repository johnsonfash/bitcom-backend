import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LgaService } from './lga.service';

@Controller('lgas')
export class LgaController {
  constructor(private lgaService: LgaService) { }

  @Get('/')
  getAllLgas() {
    return this.lgaService.getAllLgas();
  }

  @Get(':id')
  getLgaResult(@Param('id', ParseIntPipe) id: number) {
    return this.lgaService.getLgaResult(id);
  }

}
