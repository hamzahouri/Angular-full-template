import { Component, OnInit , ViewChild, TemplateRef} from '@angular/core';
import { startOfDay,
			endOfDay,
			subDays,
			addDays,
			endOfMonth,
			isSameDay,
			isSameMonth,
			addHours
		} from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarView} from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
	selector: 'anglo-calendar',
	templateUrl: './Calendar.component.html',
	styleUrls: ['./Calendar.component.scss']
})

export class CalendarComponent implements OnInit {
	
	activeDayIsOpen  : boolean = true;
	view				  : CalendarView = CalendarView.Month;
	viewDate         : Date = new Date();
	refresh          : Subject<any> = new Subject();
	@ViewChild('modalContent',{static: true}) modalContent : TemplateRef<any>;
	CalendarView = CalendarView;

	modalData: {
		action: string;
		event: CalendarEvent;
	};

	/**
	  * actions is used to delete the event.
	  */
	actions: CalendarEventAction[] = [
		{
			label: '<i class="fa fa-fw fa-times"></i>',
			onClick: ({ event }: { event: CalendarEvent }): void => {
			  this.events = this.events.filter(iEvent => iEvent !== event);
			  this.handleEvent('Deleted', event);
			}
		}
	];

	/**
	  *events is used to view the events
	  */
	events: CalendarEvent[] = [
		{
		start: subDays(startOfDay(new Date()), 1),
			end: addDays(new Date(), 1),
			title: 'A 3 day event',
			actions: this.actions,
			allDay: true,
			resizable: {
			  beforeStart: true,
			  afterEnd: true
			},
			draggable: true
		},
		{
			start: startOfDay(new Date()),
			title: 'An event with no end date',
			actions: this.actions
		},
		{
			start: addHours(startOfDay(new Date()), 2),
			end: new Date(),
			title: 'A draggable and resizable event',
			actions: this.actions,
			resizable: {
			  beforeStart: true,
			  afterEnd: true
			},
			draggable: true
		}
	];

	constructor() { }

	ngOnInit() {
	}
	
	/**
	  * handleEvent is used to handle the event and action.
	  */
	handleEvent(action: string, event: CalendarEvent): void {
		this.modalData = { event, action };
	}

	/**
	  * dayClicked is used to click the date avitity day is open .
	  */
	dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
		if (isSameMonth(date, this.viewDate)) {
			this.viewDate = date;
			if (
			  (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
			  events.length === 0
			) 
			{
			  this.activeDayIsOpen = false;
			} 
			else 
			{
			  this.activeDayIsOpen = true;
			}
		}
	}

}
