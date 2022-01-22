import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note.interface';

@Component({
  selector: 'femhack-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  @Output() formData: EventEmitter<Note> = new EventEmitter();
  @Input() note: Partial<Note> = {};

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      title: [this.note.title, [Validators.required]],
      description: [this.note.description, [Validators.required]],
      tags: this.formBuilder.group({
        projects: [false],
        business: [false],
        personal: [false],
      }),
    });
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  onSubmit() {
    console.log(this.form.value);
    this.formData.emit({ ...this.note, ...this.form.value });
  }
}
