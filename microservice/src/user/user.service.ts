import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UserService {
    private user: User[] = [];
    constructor(@InjectModel('User') private readonly userModel: Model ) {}

    getHello(): string {
        return 'THIS IS USER SERVICE';
    }
}