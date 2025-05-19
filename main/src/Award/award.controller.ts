import { Controller, Get, Post, Body } from '@nestjs/common';
import { AwardService } from './award.service';
import { Award } from './award.schema';

@Controller('award')
export class AwardController {
    constructor(private readonly awardService: AwardService) { }

    @Post()
    create(@Body() eventData: Partial<Award>) {
        return this.awardService.create(eventData);
    }

    @Get()
    findAll() {
        return this.awardService.findAll();
    }
}
