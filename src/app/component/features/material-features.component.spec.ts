import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFeaturesComponent } from './material-features.component';

describe('MaterialFeaturesComponent', () => {
  let component: MaterialFeaturesComponent;
  let fixture: ComponentFixture<MaterialFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
