import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoCellComponent } from './xo-cell.component';

describe('XoCellComponent', () => {
  let component: XoCellComponent;
  let fixture: ComponentFixture<XoCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XoCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
