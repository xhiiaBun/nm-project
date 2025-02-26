import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IauthorComponent } from './iauthor.component';

describe('IauthorComponent', () => {
  let component: IauthorComponent;
  let fixture: ComponentFixture<IauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IauthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
