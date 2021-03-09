import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IHero } from '../heroes/IHero';
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

  public save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  public goBack(): void {
    this.location.back();
  }
}
