import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardVarComponent } from './stat-card-var.component';

describe('StatCardVarComponent', () => {
  let component: StatCardVarComponent;
  let fixture: ComponentFixture<StatCardVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatCardVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
