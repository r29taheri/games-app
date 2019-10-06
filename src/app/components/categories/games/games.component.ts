import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from './../../../services/games.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  gamesList;
  search: string;
  constructor(private games: GamesService, private route: ActivatedRoute) { }
  getCategory() {
    this.route.paramMap.subscribe(params => {
      this.gamesList = null;
      this.games.getCategory(params.get("slug") || 'popular-games').subscribe((data) => {
        this.gamesList = data["_embedded"].games;
      })
    })
  }
  ngOnInit() {
    this.getCategory();
  }
}
