import { Component, OnInit } from '@angular/core';
import { IHero } from './IHero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: IHero = {
    id: 1,
    name: 'Windstorm',
  };

  public constructor() {}

  public ngOnInit(): void {}
}
