import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesTableComponent } from './templates-table.component';

describe('TemplatesTableComponent', () => {
  let component: TemplatesTableComponent;
  let fixture: ComponentFixture<TemplatesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
