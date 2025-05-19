import { Module } from '@nestjs/common';
import { AppController, AwardController, EventController } from './app.controller';
import { AppService, AwardService, EventService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './Event/event.module';
import { AwardModule } from './Award/award.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/your-db-name'),
    EventModule,
    AwardModule,
    UserModule,
  ],
  controllers: [AppController, EventController, AwardController],
  providers: [AppService, EventService, AwardService],
})
export class AppModule { }
