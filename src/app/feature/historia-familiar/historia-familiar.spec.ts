import { ComponentFixture, TestBed } from '@angular/core/testing';
import { historiaFamiliar } from './historia-familiar';

describe('historiaFamiliar', () => {
  let component: historiaFamiliar;
  let fixture: ComponentFixture<historiaFamiliar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [historiaFamiliar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(historiaFamiliar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
