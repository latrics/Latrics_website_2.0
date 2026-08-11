import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CtaController } from './cta.controller';
import { CtaService } from './cta.service';
import { 
  NavbarDemoRequest, NavbarDemoRequestSchema, 
  PartnerApplication, PartnerApplicationSchema, 
  ProductDemoRequest, ProductDemoRequestSchema 
} from './cta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NavbarDemoRequest.name, schema: NavbarDemoRequestSchema },
      { name: PartnerApplication.name, schema: PartnerApplicationSchema },
      { name: ProductDemoRequest.name, schema: ProductDemoRequestSchema },
    ]),
  ],
  controllers: [CtaController],
  providers: [CtaService],
})
export class CtaModule {}
