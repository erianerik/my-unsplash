import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveImageComponent } from './remove-image.component';

describe('RemoveImageComponent', () => {
  let component: RemoveImageComponent;
  let fixture: ComponentFixture<RemoveImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
