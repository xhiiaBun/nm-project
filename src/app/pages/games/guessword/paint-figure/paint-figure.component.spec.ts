import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintFigureComponent } from './paint-figure.component';

describe('PaintFigureComponent', () => {
  let component: PaintFigureComponent;
  let fixture: ComponentFixture<PaintFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintFigureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
