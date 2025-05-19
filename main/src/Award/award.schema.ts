import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Event } from '../Event/event.schema';

export type AwardDocument = Award & Document;

@Schema()
export class Award {
    @Prop({ required: true })
    awardtName: string;

    @Prop({ type: Types.ObjectId, ref: Event.name, required: true })
    eventId: Types.ObjectId;

    @Prop
    point: number;

    @Prop
    item: string;
}

export const AwardSchema = SchemaFactory.createForClass(Award);