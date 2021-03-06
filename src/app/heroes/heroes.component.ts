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
  selectedHero?: IHero | undefined;
  isSelected: boolean = false;

  public constructor() {}

  public ngOnInit(): void {}

  onSelect(hero: IHero): void {
    this.isSelected = true;
    if (this.selectedHero === hero) {
      this.isSelected = false;
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
}
