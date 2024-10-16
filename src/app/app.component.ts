import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RainbowCarouselComponent } from "./rainbow-carousel/rainbow-carousel.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RainbowCarouselComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pay-to-this-site';
}
