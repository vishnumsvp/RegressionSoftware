import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorComponent } from './content-selector.component';

describe('ContentSelectorComponent', () => {
  let component: ContentSelectorComponent;
  let fixture: ComponentFixture<ContentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
