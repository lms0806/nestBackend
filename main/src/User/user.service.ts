import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Award') private awardModel: Model<UserDocument>,
    ) { }

    async create(userData: Partial<User>): Promise<User> {
        const createdEvent = new this.awardModel(userData);
        return createdEvent.save();
    }

    async findAll(): Promise<User[]> {
        return this.awardModel.find().exec();
    }
}
