import { Controller, Get, Post } from '@nestjs/common';
import { AppService, AwardService, EventService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}


@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) { }

  // @Post('Event')
  // makeEvent(): string {
  //   return this.eventService.makeEvent();
  // }

  // @Get('Event')
  // getEvent(): string {
  //   return this.eventService.getEvent();
  // }
}

@Controller()
export class AwardController {
  constructor(private readonly awardService: AwardService) { }

  // @Post('Award')
  // makeAward(): string {
  //   return this.awardService.makeAward();
  // }

  // @Get('Award')
  // getAward(): string {
  //   return this.awardService.getAward();
  // }

  // @Post('UserAward')
  // getUserAward(): string {
  //   return this.awardService.getUserAward();
  // }

  // @Get('UserAwardLog')
  // getUserAwardLog(): string {
  //   return this.awardService.getUserAwardLog();
  // }
}