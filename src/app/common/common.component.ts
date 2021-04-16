import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // this.themeChange()
    let val = localStorage.getItem('theme')
    if (val == 'dark') {
      this.theme = 'dark'
    }
    else {
      this.theme = 'light'
    }
  }
  theme = ''
  ngAfterContentChecked(): void {

    let val = localStorage.getItem('theme')
    if (val == 'dark') {
      this.theme = 'dark'
    }
    else {
      this.theme = 'light'
    }
  }
  themeVal = 'dark'
  themeChange() {
    if (this.themeVal == 'dark') {
      localStorage.setItem('theme','dark')
      this.themeVal = 'light'
    }
    else {
      localStorage.setItem('theme','light')
      this.themeVal = 'dark'
    }
  }
}
