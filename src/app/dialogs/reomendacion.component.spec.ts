import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReomendacionComponent } from './reomendacion.component';

describe('ReomendacionComponent', () => {
  let component: ReomendacionComponent;
  let fixture: ComponentFixture<ReomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReomendacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
