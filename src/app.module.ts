import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './task/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'sqlite',
  database: ':memory:',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  }),
  UsersModule,
]
})
export class AppModule {}
