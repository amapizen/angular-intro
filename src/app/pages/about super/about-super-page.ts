import { Component, signal} from "@angular/core";
import { Character } from "../../interfaces/character.interface";
import { CharacterListComponent } from "../../components/smart-list/character-list/character-list.component";
import { CharacterAppComponent } from "../../components/smart-list/character-add/character-add.component";


@Component({
  selector: 'app-about-super-page',
  templateUrl: './about-super-page.html',
  imports: [
    CharacterListComponent,
    CharacterAppComponent
  ],
})

export class AboutSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },

  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

  /*   powerClasses = computed( () => {
    return {
      'higher': true,
    };
  }); */
}


