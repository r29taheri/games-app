import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game;
  failed: boolean = false;
  constructor(private games: GamesService, private route: ActivatedRoute) { }
  getDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    this.games.getGame(id).subscribe((data) => {
      this.game = data;
    }, err => {
      console.log(err)
      this.failed = true;
    })
  }
  ngOnInit() {
    this.getDetail();
  }

}
