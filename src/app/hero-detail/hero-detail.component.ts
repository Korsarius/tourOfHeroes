import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../heroes/IHero';
import { HEROES } from '../heroes/mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero?: IHero;

  public constructor() {}

  public ngOnInit(): void {}

  public rename(id: number, str: string): void {
    for (const hero of HEROES) {
      if (hero.id === id) {
        hero.name = str;
      }
    }
    console.log('HEROES: ', HEROES);
  }
}
