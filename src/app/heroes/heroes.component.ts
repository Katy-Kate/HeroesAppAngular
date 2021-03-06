import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        console.log('HeroesComponent', heroes);
        this.heroes = heroes;
      });
  }

  ngOnInit() {
    this.getHeroes();
  }

}
