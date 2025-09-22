import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperwork } from './paperwork';

describe('Paperwork', () => {
  let component: Paperwork;
  let fixture: ComponentFixture<Paperwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paperwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paperwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
