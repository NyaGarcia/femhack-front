import { Component } from '@angular/core';
import {
  faCalendar,
  faInfoCircle,
  faStickyNote,
  faTh,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  faInfoCircle = faInfoCircle;
  faUser = faUser;
  faCalendar = faCalendar;
  faTh = faTh;
  faStickyNote = faStickyNote;

  view = 'grid';

  tags = ['All', 'Projects', 'Business', 'Personal'];

  constructor() {}
}
