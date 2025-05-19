import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
    @Prop({ required: true })
    eventName: string;

    @Prop({ required: true })
    eventCondition: string;

    @Prop({ type: Date, required: true })
    startDate: Date;

    @Prop({ type: Date, required: true })
    endDate: Date;

    @Prop({ default: true })
    status: boolean;
}

export const EventSchema = SchemaFactory.createForClass(Event);