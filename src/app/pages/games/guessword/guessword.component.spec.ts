import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesswordComponent } from './guessword.component';

describe('GuesswordComponent', () => {
  let component: GuesswordComponent;
  let fixture: ComponentFixture<GuesswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuesswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
