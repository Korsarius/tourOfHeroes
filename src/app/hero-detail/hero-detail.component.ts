import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../heroes/IHero';
import { HEROES } from '../heroes/mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: IHero;

  constructor() {}

  ngOnInit(): void {}

  rename(id: number, str: string) {
    for (const hero of HEROES) {
      if (hero.id === id) {
        hero.name = str;
      }
    }
    console.log('HEROES: ', HEROES);
  }
}
