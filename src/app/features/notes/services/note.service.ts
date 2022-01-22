import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

import { CrudService } from 'src/app/core/services/crud.services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService extends CrudService<Note> {
  private _notes: BehaviorSubject<Note[]> = new BehaviorSubject([] as Note[]);

  public readonly notes$: Observable<Note[]> = this._notes.asObservable();

  constructor(protected readonly http: HttpClient) {
    super(http, 'notes');
  }

  findNotes() {
    const obs = super.find();
    obs.subscribe((notes) => this._notes.next(notes));
    return this.notes$;
  }

  remove(id: string): Observable<Note> {
    return super.remove(id).pipe(
      tap(() => {
        const notes = this._notes.getValue().filter((note) => note.id !== id);
        this._notes.next(notes);
      })
    );
  }
}
