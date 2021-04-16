import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcPageComponent } from './searc-page.component';

describe('SearcPageComponent', () => {
  let component: SearcPageComponent;
  let fixture: ComponentFixture<SearcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
