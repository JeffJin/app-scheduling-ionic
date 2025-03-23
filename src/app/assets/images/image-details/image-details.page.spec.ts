import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageDetailsPage } from './image-details.page';

describe('ImageDetailsPage', () => {
  let component: ImageDetailsPage;
  let fixture: ComponentFixture<ImageDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
