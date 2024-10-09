import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person/person.entity';

@Module({
  imports: [
    PersonModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      migrationsTableName: 'migrations_table',
      entities: [Person],
      synchronize: false,
      logging: true,
    }),
  ],
})
export class AppModule {}
