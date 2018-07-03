import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileListComponentComponent } from './mobile-list-component.component';

describe('MobileListComponentComponent', () => {
  let component: MobileListComponentComponent;
  let fixture: ComponentFixture<MobileListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
