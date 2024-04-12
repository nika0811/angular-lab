import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounerWithInputComponent } from './counter-with-input.component';

describe('CounterWithInputComponent', () => {
  let component: CounerWithInputComponent;
  let fixture: ComponentFixture<CounerWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounerWithInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounerWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});