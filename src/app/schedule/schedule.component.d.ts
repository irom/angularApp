import { OnInit } from '@angular/core';
import { EventSchedule } from '../models/EventSchedule.model';
import { ScheduleService } from '../services/schedule.service';
import 'rxjs/Rx';
export declare class ScheduleComponent implements OnInit {
    private ScheduleService;
    header: any;
    events: EventSchedule[];
    constructor(ScheduleService: ScheduleService);
    ngOnInit(): void;
}
