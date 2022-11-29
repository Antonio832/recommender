import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClusterComponent } from './button-cluster.component';

describe('ButtonClusterComponent', () => {
  let component: ButtonClusterComponent;
  let fixture: ComponentFixture<ButtonClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonClusterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
