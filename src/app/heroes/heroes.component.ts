import { Component, OnInit } from '@angular/core';
import { IHero } from './IHero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = HEROES;
  selectedHero?: IHero;

  public constructor() {}

  public ngOnInit(): void {}

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
