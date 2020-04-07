import { Component, Input } from '@angular/core';
import { Joke } from './Joke.ts';

@Component({
  selector: 'joke',
  template: `
    <div class="card card-block" ccCardHover>
      <h4 class="card-tittle"> {{data.setup}}</h4>
      <p class="card-text" [style.display]="'none'" >{{data.punchline}} </p>
      <button (click)="data.toggle()" class="btn btn-primary"> Tell me </button>
    </div>
  `
})

export class JokeComponent {
  @Input('joke') data:Joke;
}