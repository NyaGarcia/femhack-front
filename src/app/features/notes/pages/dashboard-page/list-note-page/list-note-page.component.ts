import { Component, OnInit } from '@angular/core';
import {
  faBorderAll,
  faCalendar,
  faEdit,
  faInfoCircle,
  faList,
  faStickyNote,
  faTh,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Note } from '../../../interfaces/note.interface';
import { NoteService } from '../../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-note-page',
  templateUrl: './list-note-page.component.html',
  styleUrls: ['./list-note-page.component.scss'],
})
export class ListNotePageComponent implements OnInit {
  note$ = this.noteService.findNotes();

  faInfoCircle = faInfoCircle;
  faUser = faUser;
  faCalendar = faCalendar;
  faTh = faTh;
  faStickyNote = faStickyNote;
  faTrash = faTrash;
  faEdit = faEdit;
  faList = faList;
  faGrid = faBorderAll;

  view = 'grid';

  tags = ['All', 'Projects', 'Business', 'Personal'];

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}
  removeNote({ id }: Note) {
    this.noteService.remove(id).subscribe();
  }

  editNote(noteId: string) {
    this.router.navigate(['/notes/edit', noteId]);
  }

  setGridView() {
    this.view = 'grid';
  }

  setListView() {
    this.view = 'list';
  }
}
