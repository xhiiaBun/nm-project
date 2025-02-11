import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenLoadingComponent } from './raven-loading.component';

describe('RavenLoadingComponent', () => {
  let component: RavenLoadingComponent;
  let fixture: ComponentFixture<RavenLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavenLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavenLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
