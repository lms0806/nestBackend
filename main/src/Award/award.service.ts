import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Award, AwardDocument } from './award.schema';

@Injectable()
export class AwardService {
    constructor(
        @InjectModel('Award') private awardModel: Model<AwardDocument>,
    ) { }

    async create(awardData: Partial<Award>): Promise<Award> {
        if (awardData.point == null && awardData.item == null) {
            throw new Error('point 또는 item 중 하나는 반드시 입력되어야 합니다.');
        }
        const createdEvent = new this.awardModel(awardData);
        return createdEvent.save();
    }

    async findAll(): Promise<Award[]> {
        return this.awardModel.find().exec();
    }
}
