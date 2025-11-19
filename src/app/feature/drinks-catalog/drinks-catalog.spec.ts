import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksCatalog } from './drinks-catalog';

describe('DrinksCatalog', () => {
  let component: DrinksCatalog;
  let fixture: ComponentFixture<DrinksCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
