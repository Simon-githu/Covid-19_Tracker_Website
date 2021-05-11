import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventComponent } from './prevent.component';

describe('PreventComponent', () => {
  let component: PreventComponent;
  let fixture: ComponentFixture<PreventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
