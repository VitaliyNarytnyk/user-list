import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CardsService } from '../shared/components/card/cards.service';
import { User } from '../shared/interfaces';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cards$!: Observable<User[]>

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getAll()
  }

}
