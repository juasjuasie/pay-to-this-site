import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { shuffle } from '../../utils/array-operators';

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent {

  @Input() isHidden = false;
  colorsTotal = [
    'bg-blue-400',
    'bg-teal-500',
    'bg-purple-500',
    'bg-violet-500',
    'bg-cyan-400',
    'bg-indigo-400',

  ];

  private emotes = [
    '💸',
    '🚀',
    '💰',
    '🎮',
    '🤩',
    '👻',
    '👨‍💻',
    '☕',
    '😎',
    '🗿',
    '🇲🇽',
    '🇨🇦'

  ]
  private availableEmojis: string[] = [...this.emotes];
  // Store the picked emojis for each div
  pickedEmojis: string[] = [];
  colorsRand = shuffle(this.colorsTotal);

  ngOnInit(): void {
    this.pickedEmojis = this.emotes.map(() => this.pickEmoji());
  }

 
  pickEmoji(): string {
    if (this.availableEmojis.length === 0) {
      // Reset the pool if all emojis have been used
      this.availableEmojis = [...this.emotes];
    }

    // Pick a random index from available emojis
    const randomIndex = Math.floor(Math.random() * this.availableEmojis.length);
    const emoji = this.availableEmojis[randomIndex];

    // Remove the selected emoji from the pool
    this.availableEmojis.splice(randomIndex, 1);

    return emoji;
  }
}
