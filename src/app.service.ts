import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  generate8DigitToken,
  getDaysFromToken,
  tokenDaysHelper,
} from './helpers/helpers';
import { BuyElecDto } from './models/dto/buy-elect.dto';
import { Token } from './models/token.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  buyElec(dto: BuyElecDto): Promise<Token> {
    const token = generate8DigitToken(dto.ammount);

    const date = new Date();

    return this.tokenRepository.save({
      token,
      ammount: dto.ammount,
      meterNumber: dto.meter,
      createdAt: date,
      active: true,
    });
  }

  async getDays(token: string) {
    const _token = await this.tokenRepository.findOne({ token });
    if (!_token) throw new Error('Token not found');
    return tokenDaysHelper(_token);
  }

  async loadToken(token: string) {
    const _token = await this.tokenRepository.findOne({ token });
    console.log(_token);
    return _token;
  }
}
