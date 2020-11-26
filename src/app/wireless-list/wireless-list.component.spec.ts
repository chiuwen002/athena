import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessListComponent } from './wireless-list.component';

describe('WirelessListComponent', () => {
  let component: WirelessListComponent;
  let fixture: ComponentFixture<WirelessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirelessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
