import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from './heroes/IHero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  public getHero(id: number): Observable<IHero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }

  public getHeroes(): Observable<IHero[]> {
    const heroes: Observable<IHero[]> = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
