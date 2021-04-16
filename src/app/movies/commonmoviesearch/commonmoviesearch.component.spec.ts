import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmoviesearchComponent } from './commonmoviesearch.component';

describe('CommonmoviesearchComponent', () => {
  let component: CommonmoviesearchComponent;
  let fixture: ComponentFixture<CommonmoviesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonmoviesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonmoviesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
