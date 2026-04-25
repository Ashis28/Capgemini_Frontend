import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainiList } from './traini-list';

describe('TrainiList', () => {
  let component: TrainiList;
  let fixture: ComponentFixture<TrainiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainiList],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
