import { Body, Controller, Post } from '@nestjs/common';
import { GtpService } from './gtp.service';
import { OrthographyDto } from './dtos';

@Controller('gtp')
export class GtpController {
  constructor(private readonly gtpService: GtpService) {}


  @Post('orthography-check')
  orthographyCheck(
      @Body() orthographyDto: OrthographyDto
    ) {
      return this.gtpService.orthographyCheck(orthographyDto);
  }

}
