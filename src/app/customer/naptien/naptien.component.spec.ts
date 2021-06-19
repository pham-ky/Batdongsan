import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaptienComponent } from './naptien.component';

describe('NaptienComponent', () => {
  let component: NaptienComponent;
  let fixture: ComponentFixture<NaptienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaptienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaptienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
