import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowCarouselComponent } from './rainbow-carousel.component';

describe('RainbowCarouselComponent', () => {
  let component: RainbowCarouselComponent;
  let fixture: ComponentFixture<RainbowCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainbowCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainbowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
