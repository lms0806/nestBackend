import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Award, AwardSchema } from './award.schema';
import { AwardService } from './award.service';
import { AwardController } from './award.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Award.name, schema: AwardSchema }]),
    ],
    providers: [AwardService],
    controllers: [AwardController],
})
export class AwardModule { }