import { ComponentFixture, TestBed } from '@angular/core/testing';

import { teachers } from './teachers';

describe('Teachers', () => {
  let component: teachers;
  let fixture: ComponentFixture<teachers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [teachers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(teachers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
