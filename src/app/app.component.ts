import { Component } from '@angular/core';

// define a Game class
export class Game {
  id: number;
  title: string;
}

// create an in-memory array of games
let GAMES: Game[] = [
  { id: 1, title: 'Minecraft'},
  { id: 2, title: 'Minesweeper'},
  { id: 3, title: 'Tanks'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lesson 10 - First Angular App';
  games = GAMES;
  selectedGame: Game;

  onSelect(game: Game) {
    this.selectedGame = game;
  }
}
