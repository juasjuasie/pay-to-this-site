import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {shuffle} from '../utils/array-operators'

@Component({
  selector: 'app-rainbow-carousel',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './rainbow-carousel.component.html',
  styleUrl: './rainbow-carousel.component.css'
})
export class RainbowCarouselComponent {

  colorsTotal = [
    'bg-blue-400',
    'bg-teal-500',
    'bg-purple-500',
    'bg-blue-500',
    'bg-cyan-400',
    'bg-indigo-400'
  ];

  emotes = [
    ':money'
  ]
  colorsRand = shuffle(this.colorsTotal);

  colorsFront = this.colorsRand.slice(0, this.colorsRand.length/2);
  colorsHidden = this.colorsRand.slice(this.colorsRand.length/2, this.colorsTotal.length);

}
