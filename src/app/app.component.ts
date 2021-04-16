import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div [ngClass]="{
  'light':theme=='light',
  'dark':theme=='dark'
  }"><router-outlet > </router-outlet></div>

`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviePlatform';
  theme = 'dark'
  ngAfterContentChecked(): void {

    let val = localStorage.getItem('theme')
    if (val == 'dark') {
      this.theme = 'dark'
    }
    else {
      this.theme = 'light'
    }
  }
}
