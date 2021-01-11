import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontnavComponent } from './frontnav.component';

describe('FrontnavComponent', () => {
  let component: FrontnavComponent;
  let fixture: ComponentFixture<FrontnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
