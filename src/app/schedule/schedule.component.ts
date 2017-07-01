import { Component, OnInit, Injectable } from '@angular/core';
import { EventSchedule } from  '../models/EventSchedule.model';



import 'rxjs/Rx';
@Injectable()

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './schedule.component.html'
})

export class ScheduleComponent implements OnInit {
  header: any;
  events: EventSchedule[];
  event: EventSchedule;
  dialogVisible: boolean = false;

  constructor(

  ) { }

  ngOnInit() {

 
   this.header = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
    };
    console.log(this.events);
  }

      handleDayClick(event) {
        this.event = new EventSchedule();
        this.event.start = event.date.format();
        this.dialogVisible = true;

        // trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        // this.cd.detectChanges();
    }

      handleEventClick(e) {
        this.event = new EventSchedule();
        this.event.title = e.calEvent.title;

        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }

        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }

        saveEvent() {
        // update
        if (this.event.id) {
/*            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
*/            }
        // new
        // tslint:disable-next-line:one-line
        else {
            //this.event.id = this.idGen++;
           // this.events.push(this.event);

            this.event = null;
        }

        this.dialogVisible = false;
    }


}
