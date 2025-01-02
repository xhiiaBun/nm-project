import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersWordComponent } from './letters-word.component';

describe('LettersWordComponent', () => {
  let component: LettersWordComponent;
  let fixture: ComponentFixture<LettersWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
