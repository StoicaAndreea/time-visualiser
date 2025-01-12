import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeGlossaryComponent } from './derivative-glossary.component';

describe('DerivativeGlossaryComponent', () => {
  let component: DerivativeGlossaryComponent;
  let fixture: ComponentFixture<DerivativeGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerivativeGlossaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivativeGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
