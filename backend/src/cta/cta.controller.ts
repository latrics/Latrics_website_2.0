import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import type { Response } from 'express';
import { CtaService } from './cta.service';

@Controller('api/cta')
export class CtaController {
  constructor(private readonly ctaService: CtaService) {}

  @Post()
  async createCta(@Body() createCtaDto: any, @Res() res: Response) {
    try {
      const newCta = await this.ctaService.create(createCtaDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'CTA submission successful',
        data: newCta,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred while saving the CTA submission',
        error: error.message,
      });
    }
  }
}
