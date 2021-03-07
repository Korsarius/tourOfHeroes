import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IHero } from '../heroes/IHero';
import { HEROES } from '../heroes/mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero?: IHero;

  public constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  public ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  public rename(id: number, str: string): void {
    for (const hero of HEROES) {
      if (hero.id === id) {
        hero.name = str;
      }
    }
    console.log('HEROES: ', HEROES);
  }

  public goBack(): void {
    this.location.back();
  }
}
