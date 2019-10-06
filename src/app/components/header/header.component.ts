import { Component, OnInit } from '@angular/core';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  leftTransform: string;
  rightTransform: string;
  centerCircleRotateLeft: string;
  centerCircleRotateRight: string;
  categories;
  category: string = 'waiting';
  changeCat: boolean = false;
  showLoading: boolean = true;
  catOuterContainerEl: string;
  constructor(private games: GamesService) { }
  handleMouseMove(e) {
    if(window.innerWidth < 768) return;
    const halfWinWidth = window.innerWidth / 2;
    const halfWinHeight = window.innerHeight / 2;
    const wMagicNumber = ((halfWinWidth - e.pageX) / halfWinWidth) * 10;
    const hMagicNumber = ((halfWinHeight - e.pageY) / halfWinHeight) * 20;
    this.leftTransform = `translate(${50 + wMagicNumber}%, ${-50 + hMagicNumber}%)`;
    this.rightTransform = `translate(${-50 + wMagicNumber}%, ${-50 + hMagicNumber}%)`;
    this.centerCircleRotateLeft = `translate(50%, -50%) rotate(${45 * wMagicNumber}deg)`;
    this.centerCircleRotateRight = `translate(-50%, -50%) rotate(${-90 * wMagicNumber}deg)`;
  }
  getCategories() {
    this.games.getCategories().subscribe((data: Object) => {
      this.categories = data["_embedded"].game_categories;
      this.games.categories = this.categories;
      this.changeCategory();
    })
  }
  changeCategory() {
    let index = 0;
    const catsCount = this.categories.length;
    setInterval(() => {
      this.changeCat = true;
      setTimeout(() => {
        this.category = this.categories[index];
        this.catOuterContainerEl = this.categories[index].name.length * 16 + "px";
        this.changeCat = false;
        this.showLoading = false;
        if(index === (catsCount - 1)) index = 0;
        else index++;
      }, 1600);
    }, 4000);
  }
  ngOnInit() {
    this.getCategories();
  }

}
