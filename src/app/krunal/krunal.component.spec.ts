import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrunalComponent } from './krunal.component';

describe('KrunalComponent', () => {
  let component: KrunalComponent;
  let fixture: ComponentFixture<KrunalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrunalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
