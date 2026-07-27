import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompanies } from './top-companies';

describe('TopCompanies', () => {
  let component: TopCompanies;
  let fixture: ComponentFixture<TopCompanies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCompanies],
    }).compileComponents();

    fixture = TestBed.createComponent(TopCompanies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
