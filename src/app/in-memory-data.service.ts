import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IHero } from './heroes/IHero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: IHero[] = [
      {
        id: 11,
        name: 'Superman',
        powers: [
          'Flight',
          'Superhuman strength',
          'X-ray vision',
          'Heat vision',
          'Cold breath',
          'Super-speed',
          'Enhanced hearing',
          'Nigh-invulnerability',
        ],
        photo:
          'https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1',
      },
      {
        id: 12,
        name: 'Ironman',
        powers: [
          'Flight',
          'Super strength',
          'Durability',
          'Powered armor suit',
          'Variety of weapons',
        ],
        photo:
          'https://sabrina.biz.ua/19508-superlarge_default/tancuyusshij-zheleznyj-chelovek-geroi-dance-hero-ironman-pa10-8.jpg',
      },
      {
        id: 13,
        name: 'Batman',
        powers: [
          'Wealth',
          'Intellect',
          'Fighting skills',
          'Variety of devices',
        ],
        photo:
          'https://cdn.pocket-lint.com/r/s/320x/assets/images/149433-tv-feature-what-order-should-you-watch-the-batman-movies-and-shows-image10-nmizadlas2.jpg?v1',
      },
      {
        id: 14,
        name: 'Black Panther',
        powers: [
          'Superhumanly acute senses',
          'Enhanced strength',
          'Enhanced speed',
          'Enhanced agility',
          'Enhanced stamina',
          'Enhanced reflexes',
        ],
        photo:
          'https://i.pinimg.com/originals/34/a9/62/34a9624e3658bab0e1effbac9df7b01e.jpg',
      },
      {
        id: 15,
        name: 'Captain America',
        powers: [
          'Enhanced strength',
          'Enhanced speed',
          'Enhanced agility',
          'Enhanced stamina',
        ],
        photo:
          'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0.jpg/250px-%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0.jpg',
      },
      {
        id: 16,
        name: 'Spider-Man',
        powers: [
          'Special "Spider-Sense" warns of incoming danger',
          'Ability to stick to and climb walls and other surfaces',
          'Uses self-designed web-shooters allowing him to fire and swing from sticky webs',
          'Enhanced strength',
          'Enhanced endurance',
          'Enhanced agility',
          'Enhanced reflexes',
        ],
        photo:
          'https://s.yimg.com/uu/api/res/1.2/dBkcufjWEf1ZLHDw6maxdw--~B/aD02NTA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-US/fatherly_721/ec4eee4fa66b6de1025bfe3a00e99f1a',
      },
      {
        id: 17,
        name: 'Wolverine',
        powers: [
          'A special healing power that also slows his aging',
          'Superhuman strength',
          'Enhanced senses',
          'Tracking abilities',
          'Enhanced reflexes',
        ],
        photo:
          'https://media.gq.com/photos/58b9fda8803bdb766dd69ef7/master/pass/wolverine.jpg',
      },
      {
        id: 18,
        name: 'Deadpool',
        powers: [
          'Regenerative healing factor',
          'Foreign chemical resistance',
          'Disease immunity',
          'Extended longevity',
        ],
        photo: 'https://miro.medium.com/max/3840/1*0ubYRV_WNR9iYrzUAVINHw.jpeg',
      },
      {
        id: 19,
        name: 'Flash',
        powers: [
          'Superhuman speed',
          'Accelerated healing',
          'Dimensional travel',
          'Electrokinesis',
          'Time travel',
        ],
        photo:
          'https://www.iguides.ru/upload/iblock/e4c/e4ca34ddd972e7d47e0b3378d2dbfad3.jpg',
      },
      {
        id: 20,
        name: 'Joker',
        powers: [
          'Criminal mastermind',
          'Expert chemist',
          'Using weaponized props and toxins',
        ],
        photo:
          'https://img5.goodfon.ru/wallpaper/nbig/c/b9/joaquin-phoenix-khoakin-feniks-dzhoker-dzhoker-2019-joker-20.jpg',
      },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: IHero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
