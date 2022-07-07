import { Module } from '@nestjs/common';
import { databasePgProviders } from './database-pg.providers';

@Module({
    providers: [...databasePgProviders],
    exports: [...databasePgProviders]
})
export class DatabasePgModule {}
