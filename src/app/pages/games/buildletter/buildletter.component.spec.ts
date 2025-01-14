import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildletterComponent } from './buildletter.component';

describe('BuildletterComponent', () => {
  let component: BuildletterComponent;
  let fixture: ComponentFixture<BuildletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
