import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Note } from '../../interfaces/note.interface';

@Component({
  selector: 'femhack-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  @Input() note: Note;
  @Output() removeEvent: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() editEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  remove(note: Note) {
    this.removeEvent.emit(note);
  }

  edit() {
    this.editEvent.emit(this.note.id);
  }
}
