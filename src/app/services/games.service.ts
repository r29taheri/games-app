import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseurl: string = 'https://staging-frontapi.cherrytech.com/';
  customParams: string = 'brand=cherrycasino.desktop&locale=en';
  categories;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.baseurl}game-categories?${this.customParams}`)
  }
  getCategory(name: string) {
    return this.http.get(`${this.baseurl}game-categories/${name}?${this.customParams}`)
  }
  getGame(id: string) {
    return this.http.get(`${this.baseurl}games/${id}?${this.customParams}`)
  }
}
