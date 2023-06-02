import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './modules/job/job.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    // type: 'mysql',
    type: 'sqlite',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: '',
    database: 'FindAJobDB',
    entities: [],
    synchronize: true,
  }), JobModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
