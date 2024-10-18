import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {shuffle, pickAndSplice} from '../utils/array-operators'
import { ColorListComponent } from "./color-list/color-list.component";

@Component({
  selector: 'app-rainbow-carousel',
  standalone: true,
  imports: [NgClass, NgFor, ColorListComponent],
  templateUrl: './rainbow-carousel.component.html',
  styleUrl: './rainbow-carousel.component.css'
})
export class RainbowCarouselComponent {

}
