import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreminderComponent } from './postreminder.component';

describe('PostreminderComponent', () => {
  let component: PostreminderComponent;
  let fixture: ComponentFixture<PostreminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostreminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
