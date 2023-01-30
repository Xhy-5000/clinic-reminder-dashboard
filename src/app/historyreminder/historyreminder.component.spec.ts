import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryreminderComponent } from './historyreminder.component';

describe('HistoryreminderComponent', () => {
  let component: HistoryreminderComponent;
  let fixture: ComponentFixture<HistoryreminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryreminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
