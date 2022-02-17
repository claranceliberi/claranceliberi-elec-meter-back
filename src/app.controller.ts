import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BuyElecDto } from './models/dto/buy-elect.dto';
import { Token } from './models/token.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/all')
  getAll(): Promise<Token[]> {
    return this.appService.getAllTokens();
  }
  @Post('/pay')
  buyToken(@Body() dto: BuyElecDto) {
    try {
      return this.appService.buyElec(dto);
    } catch (e) {
      return e.message();
    }
  }

  @Get('/get-days/:token')
  getDaysFromToken(@Param('token') token: string) {
    return this.appService.getDays(token);
  }

  @Get('/load-token/:token')
  loadToken(@Param('token') token: string) {
    try {
      return this.appService.loadToken(token);
    } catch (e) {
      return e.message();
    }
  }
}
