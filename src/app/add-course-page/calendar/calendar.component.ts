import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() creationDate: Date;
  @Output() creationDateChange: EventEmitter<Date> = new EventEmitter()

  placeholderData: string;

  ngOnInit(): void {
    if (this.creationDate) {
      +this.creationDate - +new Date() > -100 && +this.creationDate - +new Date() < 0 ? this.placeholderData = 'Choose a date' :
        this.placeholderData = `${this.creationDate.getDate()}/${this.creationDate.getMonth()}/${this.creationDate.getFullYear()}`
    }
  }

  onCreationDateChange(date: Date) {
    this.creationDateChange.emit(date)
  }

}
