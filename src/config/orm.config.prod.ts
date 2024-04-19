// orm.config.prod.ts
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: '<YOUR_HOST>',
    port: 5432,
    username: '<YOUR_PRODUCTION_DATABASE_USERNAME>',
    password: '<YOUR_PRODUCTION_DATABASE_PASSWORD>',
    database: 'goaltracker-db',
    entities: [User],
    synchronize: false, // Disable this always in production
  }),
);