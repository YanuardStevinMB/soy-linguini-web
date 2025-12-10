import { ComponentFixture, TestBed } from '@angular/core/testing';
import { equipoNuestro } from './equipo-nuestro';

describe('equipoNuestro', () => {
  let component: equipoNuestro;
  let fixture: ComponentFixture<equipoNuestro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [equipoNuestro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(equipoNuestro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
