import '../../scss/views/home.scss';

import { Subject } from 'rxjs';
import CalendarComponent from '../webComponents/calendar/calendar';

const calendarSubject = new Subject();
const next = (ev: Event) => calendarSubject.next(ev);

window.customElements.define('calendar-component', CalendarComponent);

const calendar = document.getElementById('calendar-component') as CalendarComponent;
calendar.onEmit = next;
calendar.execute();

calendarSubject.subscribe(value => {
  const ev = value as MouseEvent;
  const target = ev.target as HTMLButtonElement;

  console.log(target.value);
});
