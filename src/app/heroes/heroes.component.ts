import { Component, OnInit } from '@angular/core';
import { IHero } from './IHero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: IHero[] = new Array<IHero>();

  public constructor(private heroService: HeroService) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  public add(name: string, photo: string): void {
    name = name.trim();
    photo = photo.trim();
    if (!name || !photo) {
      return;
    }
    this.heroService.addHero({ name, photo } as IHero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  public delete(hero: IHero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
