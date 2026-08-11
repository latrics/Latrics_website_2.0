import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'navbar_demo_requests' })
export class NavbarDemoRequest extends Document {
  @Prop({ required: true }) formType: string;
  @Prop() name?: string;
  @Prop() email?: string;
  @Prop() company?: string;
  @Prop() phone?: string;
  @Prop() message?: string;
  @Prop({ type: Object }) additionalData?: Record<string, any>;
}
export const NavbarDemoRequestSchema = SchemaFactory.createForClass(NavbarDemoRequest);

@Schema({ timestamps: true, collection: 'partner_applications' })
export class PartnerApplication extends Document {
  @Prop({ required: true }) formType: string;
  @Prop() name?: string;
  @Prop() email?: string;
  @Prop() company?: string;
  @Prop() phone?: string;
  @Prop() message?: string;
  @Prop({ type: Object }) additionalData?: Record<string, any>;
}
export const PartnerApplicationSchema = SchemaFactory.createForClass(PartnerApplication);

@Schema({ timestamps: true, collection: 'product_demo_requests' })
export class ProductDemoRequest extends Document {
  @Prop({ required: true }) formType: string;
  @Prop() name?: string;
  @Prop() email?: string;
  @Prop() company?: string;
  @Prop() phone?: string;
  @Prop() message?: string;
  @Prop({ type: Object }) additionalData?: Record<string, any>;
}
export const ProductDemoRequestSchema = SchemaFactory.createForClass(ProductDemoRequest);
