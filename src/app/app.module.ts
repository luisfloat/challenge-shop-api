import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ApiModule } from 'src/api/api.module';
import { BackupModule } from 'src/backup/backup.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ApiModule,
        BackupModule,
        ScheduleModule.forRoot(),
    ],
})
export class AppModule {}
