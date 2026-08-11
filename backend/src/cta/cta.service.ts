import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NavbarDemoRequest, PartnerApplication, ProductDemoRequest } from './cta.schema';

@Injectable()
export class CtaService {
  constructor(
    @InjectModel(NavbarDemoRequest.name) private navbarDemoModel: Model<NavbarDemoRequest>,
    @InjectModel(PartnerApplication.name) private partnerAppModel: Model<PartnerApplication>,
    @InjectModel(ProductDemoRequest.name) private productDemoModel: Model<ProductDemoRequest>,
  ) {}

  async create(createCtaDto: any): Promise<any> {
    const { formType } = createCtaDto;

    if (formType === 'Navbar Demo Request') {
      const createdCta = new this.navbarDemoModel(createCtaDto);
      return createdCta.save();
    } else if (formType === 'Partner Application') {
      const createdCta = new this.partnerAppModel(createCtaDto);
      return createdCta.save();
    } else if (formType === 'BottomCtaBanner - Demo Request') {
      const createdCta = new this.productDemoModel(createCtaDto);
      return createdCta.save();
    } else {
      throw new BadRequestException(`Unknown formType: ${formType}`);
    }
  }
}
