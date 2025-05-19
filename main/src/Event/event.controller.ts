import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.schema';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) { }

    @Post()
    create(@Body() eventData: Partial<Event>) {
        return this.eventService.create(eventData);
    }

    @Get()
    findAll() {
        return this.eventService.findAll();
    }
}
