import { Component, OnInit } from '@angular/core';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories;
  isChecked: boolean = false;
  constructor(private games: GamesService) { }
  getCategories() {
    if(this.games.categories)
      this.categories = this.games.categories
    else {
      this.games.getCategories().subscribe((data: Object) => {
        this.categories = data["_embedded"].game_categories;
        this.games.categories = this.categories;
      })
    }
  }
  onSelectCat() {
    this.isChecked = false;
  }
  ngOnInit() {
    this.getCategories();
  }
}
