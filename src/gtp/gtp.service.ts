import { Body, Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';
import OpenAI from 'openai';

@Injectable()
export class GtpService {

    private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY})

   async orthographyCheck(orthographyDto : OrthographyDto) {
        return await orthographyCheckUseCase( this.openai , {
            prompt: orthographyDto.prompt
        });
    }

}
