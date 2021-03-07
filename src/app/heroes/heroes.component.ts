import { Component, OnInit } from '@angular/core';
import { IHero } from './IHero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: IHero[] = new Array<IHero>();
  public selectedHero?: IHero | undefined;
  public isSelected: boolean = false;

  public constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  public onSelect(hero: IHero): void {
    this.isSelected = true;
    if (this.selectedHero === hero) {
      this.isSelected = false;
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
  }
}
