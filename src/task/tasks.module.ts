import { Module } from '@nestjs/common';
import { UsersController } from './tasks.controller';
import { UsersService } from './tasks.service';
import { User } from './tasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
