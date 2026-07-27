import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDropdown } from './sort-dropdown';

describe('SortDropdown', () => {
  let component: SortDropdown;
  let fixture: ComponentFixture<SortDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(SortDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
