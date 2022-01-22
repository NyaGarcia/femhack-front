import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotePageComponent } from './list-note-page.component';

describe('ListNotePageComponent', () => {
  let component: ListNotePageComponent;
  let fixture: ComponentFixture<ListNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNotePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
