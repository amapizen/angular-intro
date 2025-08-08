import { UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.html',
  imports: [ UpperCasePipe],
  styles: [

  ],
  //styleUrls: ['./hero-page.css'],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed( () => {
    const description = `${ this.name()} has ${ this.age() } years.`;
    return description;
  });

  capitalizeName = computed( () => {
    return this.name().toUpperCase();
  });

  getHeroDescription() {
    return `${ this.name()} has ${this.age()} years.`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(25);
  }
  changeAge() {
    this.age.set(35);
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}

