import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmntComponent } from './cmnt.component';

describe('CmntComponent', () => {
  let component: CmntComponent;
  let fixture: ComponentFixture<CmntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmntComponent]
    });
    fixture = TestBed.createComponent(CmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
