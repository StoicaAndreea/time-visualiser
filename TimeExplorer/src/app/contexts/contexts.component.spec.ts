import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextsComponent } from './contexts.component';

describe('ContextsComponent', () => {
  let component: ContextsComponent;
  let fixture: ComponentFixture<ContextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
