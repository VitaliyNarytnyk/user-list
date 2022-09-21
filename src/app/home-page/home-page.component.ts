import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardsService } from '../shared/cards.service';
import { User } from '../shared/interfaces';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  cards: User[] = []
  cSub!: Subscription

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit(): void {
    this.cSub = this.cardsService.getAll().subscribe(cards => {
      this.cards = cards
    })
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe()
    }
  }

  sortByCity() {
    this.cards.sort((a, b) => (a.address.city > b.address.city) ? 1 : -1)
  }

  sortByCompany() {
    this.cards.sort((a, b) => (a.company!.name > b.company!.name) ? 1 : -1)
  }
}
