import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Note } from '../../../interfaces/note.interface';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.scss'],
})
export class CreateNotePageComponent implements OnInit {
  constructor(
    private readonly noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(note: Note) {
    this.noteService
      .create(note)
      .pipe(tap(() => this.router.navigate(['/notes'])))
      .subscribe();
  }
}
