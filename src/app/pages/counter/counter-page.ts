import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  //styleUrls: ['./counter-page.css'],
  styles: [
    `
      button {
        margin: 8px 8px;
        padding: 8px 12px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }
  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);
  }
  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
