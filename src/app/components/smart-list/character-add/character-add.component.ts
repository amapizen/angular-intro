import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
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

export class CharacterAppComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();


  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      //id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    //this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    console.log(this.name(), this.power() );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
