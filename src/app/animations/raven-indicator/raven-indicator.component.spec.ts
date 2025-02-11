import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenIndicatorComponent } from './raven-indicator.component';

describe('RavenIndicatorComponent', () => {
  let component: RavenIndicatorComponent;
  let fixture: ComponentFixture<RavenIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavenIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavenIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
