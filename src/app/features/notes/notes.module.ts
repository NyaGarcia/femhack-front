import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreateNotePageComponent } from './pages/dashboard-page/create-note-page/create-note-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EditNotePageComponent } from './pages/dashboard-page/edit-note-page/edit-note-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ListNotePageComponent } from './pages/dashboard-page/list-note-page/list-note-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { NoteComponent } from './components/note/note.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteRoutingModule } from './notes-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    NoteComponent,
    SearchBarComponent,
    NoteFormComponent,
    EditNotePageComponent,
    CreateNotePageComponent,
    ListNotePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NoteRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
  ],
})
export class NotesModule {}
