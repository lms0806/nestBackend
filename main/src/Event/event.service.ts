import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './event.schema';

@Injectable()
export class EventService {
    constructor(
        @InjectModel('Event') private eventModel: Model<EventDocument>,
    ) { }

    async create(eventData: Partial<Event>): Promise<Event> {
        const createdEvent = new this.eventModel(eventData);
        return createdEvent.save();
    }

    async findAll(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }
}
