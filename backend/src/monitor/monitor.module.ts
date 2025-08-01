import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppointmentMonitorService } from './appointment-monitor.service';
import { PrismaService } from 'prisma/prisma.service';
import { AppointmentsModule } from '..//appointment/appointments.module';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [ScheduleModule.forRoot(), AppointmentsModule, NotificationModule],
  providers: [AppointmentMonitorService, PrismaService],
})
export class MonitorModule {}
