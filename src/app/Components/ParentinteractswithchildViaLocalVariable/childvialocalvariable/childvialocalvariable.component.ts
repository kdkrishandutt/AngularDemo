import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-childvialocalvariable',
  templateUrl: './childvialocalvariable.component.html',
  styleUrls: ['./childvialocalvariable.component.scss']
})
export class ChildvialocalvariableComponent implements OnInit, OnDestroy {

  constructor() { }

  intervalId = 0;
  message = '';
  seconds = 10;
  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit() { this.start(); }
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
        setTimeout(() => {
          this.countDown();
        }, 6000);
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
