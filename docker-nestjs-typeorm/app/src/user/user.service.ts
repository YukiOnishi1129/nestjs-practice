import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  addUser(name: string, email: string) {
    const user = new User();
    user.name = name;
    user.email = email;
    return this.userRepository.insert(user);
  }

  getUserList() {
    return this.userRepository.find();
  }
}
