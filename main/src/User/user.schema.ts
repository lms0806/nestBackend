import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Event } from '../Event/event.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    awardtName: string;

    @Prop({ type: Types.ObjectId, ref: Event.name, required: true })
    event: Types.ObjectId;

    @Prop
    point: number;

    @Prop
    item: string;
}

export const UserSchema = SchemaFactory.createForClass(User);