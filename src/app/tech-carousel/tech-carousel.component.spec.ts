import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCarouselComponent } from './tech-carousel.component';

describe('TechCarouselComponent', () => {
  let component: TechCarouselComponent;
  let fixture: ComponentFixture<TechCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
