import {ApiServiceService} from './../api-service.service';
// import {SESSION_STORAGE} from './../../content';
import {Routes,Router} from '@angular/router';
import {Component,OnInit} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: ApiServiceService,private routes: Router) {}
  password: any;
  email: any;
  url: any;
  loginTrue: any;
  ngOnInit(): void {
    this.url = window.location.href
    this.loginTrue = this.url.includes('login')
    if (this.loginTrue) {
      this.service.deleteToken();
    }

  }
  title = 'MoviePlatform';

  loggin(login: any) {

    this.service.login(login.value).subscribe((response: any) => {
      console.log(response);
      if (response.is_success) {
        localStorage.setItem('token',response.data.token);
        this.routes.navigate(['/movies/Card']);
        console.log(response.data.token);
      }



    },(error) => {
      console.log(error);

    })
  }
}
