import { RouterModule, Routes } from '@angular/router';

import { CreateNotePageComponent } from './pages/dashboard-page/create-note-page/create-note-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EditNotePageComponent } from './pages/dashboard-page/edit-note-page/edit-note-page.component';
import { ListNotePageComponent } from './pages/dashboard-page/list-note-page/list-note-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      { path: '', component: ListNotePageComponent },
      { path: 'create', component: CreateNotePageComponent },
      { path: 'edit/:id', component: EditNotePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
