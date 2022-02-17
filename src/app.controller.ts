import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BuyElecDto } from './models/dto/buy-elect.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  buyToken(@Body() dto: BuyElecDto) {
    return this.appService.buyElec(dto);
  }
}
