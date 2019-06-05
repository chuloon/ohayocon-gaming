import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  gameList = [
    "League of Legends",
    "Overwatch",
    "DOTA 2"
  ];
  filteredGameList: any[];

  constructor() { }

  ngOnInit() {
  }

  filterGameList(event) {
    this.filteredGameList = [];

    this.gameList.forEach((game) => {
      if(game.toLowerCase().indexOf(event.query.toLowerCase()) == 0)
        this.filteredGameList.push(game);
    });

    if(this.filteredGameList.length == 0)
      this.filteredGameList.push("We\'re not playing " + event.query + " yet. Click here to request to play it!");
  }

  selectGame(game) {
    console.log(game + " selected");
  }

}
