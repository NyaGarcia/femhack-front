import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Note } from '../../../interfaces/note.interface';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-edit-note-page',
  templateUrl: './edit-note-page.component.html',
  styleUrls: ['./edit-note-page.component.scss'],
})
export class EditNotePageComponent implements OnInit {
  note$: Observable<Note>;

  constructor(
    private readonly noteService: NoteService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.note$ = this.activatedRoute.params.pipe(
      map(({ id }) => id),
      switchMap((id: string) => this.noteService.findOne(id))
    );
  }

  update(note: Note) {
    this.noteService
      .update(note.id, note)
      .pipe(
        tap(() => this.toastr.success('Your note has been updated!')),
        tap(() => this.router.navigate(['/notes']))
      )
      .subscribe();
  }
}
