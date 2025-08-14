import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = () : Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}


@Injectable({providedIn: 'root'})
export class SmartListService {
  /* characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);
  */
  characters = signal<Character[]>(loadFromLocalStorage());
  saveToLocalStorage = effect( () => {
    console.log(`Character number: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
