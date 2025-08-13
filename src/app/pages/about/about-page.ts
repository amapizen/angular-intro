import { NgClass } from "@angular/common";
import { Component, computed, signal} from "@angular/core";

interface Character {
  id: number
  name: string;
  power: number;
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.html',
  imports: [
    //NgClass,
  ],
  styles: [
    `
      .higher {
        color: red;
        font-weight: bold;
      }
      .high {
        color: blue;
        font-weight: bold;
      }
    `,
  ],
})

export class AboutPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Broly', power: 10000 },
    { id: 4, name: 'Gohan', power: 8000 },
    { id: 5, name: 'Trunks', power: 7500 },
    { id: 6, name: 'Gotenks', power: 7000 },
    { id: 7, name: 'Piccolo', power: 6000 },
    { id: 8, name: 'Yamcha', power: 3000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
    console.log(this.name(), this.power() );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  /*   powerClasses = computed( () => {
    return {
      'higher': true,
    };
  }); */
}


