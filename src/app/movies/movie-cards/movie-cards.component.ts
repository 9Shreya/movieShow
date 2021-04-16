import {Router} from '@angular/router';
import {ApiServiceService} from './../../api-service.service';
import {Component,OnInit,HostListener,Inject,ViewChild} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {DOCUMENT} from '@angular/common';
import {Observable,from} from 'rxjs';
import {toArray,map,pluck,debounce,debounceTime,distinctUntilChanged,switchMap,filter} from 'rxjs/operators';
import {NgForm} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {
  @ViewChild('searchForm') searchForm?: NgForm
  constructor(@Inject(DOCUMENT) private document: Document,private service: ApiServiceService,private toast: ToastrService,private route: Router) {}
  // constructor(private service: ApiServiceService,private toast: ToastrService) {}
  searchValueText = ''
  searchMovies: any = []
  searchText: boolean = false
  textChange() {

    this.searchMovies = []
    console.log(this.searchForm?.value.searchTerm);
    if (this.searchForm?.value.searchTerm?.length > 2 && this.searchForm?.valid) {
      // const formValue = this.searchForm?.valueChanges;
      // formValue?.pipe(
      //   map(data => data.searchTerm),
      //   debounceTime(250),
      //   distinctUntilChanged(),
      // ).subscribe((res) => {
      let val = this.searchForm?.value.searchTerm.toLowerCase()
      this.searchMovies = this.movies.filter((data) => {
        console.log(this.searchMovies,data.title?.toLowerCase().includes(val),val);
        return data.title?.toLowerCase().includes(val) ||
          data.description?.toLowerCase().includes(val) ||
          data.genres?.toLowerCase().includes(val)
      })
      this.searchText = true
      console.log(this.searchMovies);

    }
  }

  page = 2;
  valueScroll = 0;

  // movies = [];
  movies = [
    {
      description: "",
      genres: "",
      title: "",
      uuid: ""

    }]
  arrayOfMain: any = []
  theme: any;
  ngOnInit(): void {
    $('.modal').on('hidden.bs.modal',() => {
      this.getPages()
    })
    this.getPages()
    // this.themeChange()
    if (!localStorage.getItem('token')) {
      this.route.navigate(["/login"])
    }
    let val = localStorage.getItem('theme')
    if (val == 'dark') {
      this.theme = 'dark'
    }
    else {
      this.theme = 'light'
    }
  }

  getPages() {
    this.loading = false

    this.service.getMovies(this.page).subscribe(
      (res: any) => {

        this.arrayOfMain = res.results
        console.log(res);

        this.movies = []
        let val: any =
        {
          uuid: "388c99da-0cba-4ff0-a528-faea153b43c3"
        }

        this.arrayOfMain.forEach((element: any,index: any) => {
          if (index == 8) {
            this.movies.push(val)
            this.movies.push(element)
          } else {
            this.movies.push(element)
          }
        })
        console.log(res);
        this.loading = false

      },
      (error) => {


        this.loading = false

        console.log(error)
        // this.toast.warning('Sorry Something went worng !!!')
        $('#exampleModal').modal('show');

      })

  }
  loading: boolean = false

  @HostListener("window:scroll",[]) onWindowScroll() {
    //.scrollTop
    this.valueScroll = this.document.documentElement.scrollTop;

    console.log(this.document.documentElement.scrollTop)

  }

  scrollTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0,pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    },16);
  }
  loadMore(page: any) {
    console.log(page);
    if (page !== 1) {
      this.page = page - 1
      this.getPages()
    }

  }
  loadMorePre(page: any) {
    console.log(page);

    this.page--
    this.getPages()
  }
  loadMoreNext(page: any) {
    console.log(page);

    this.page = this.page + 1;
    this.getPages()
  }
  setTags(event: any) {
    console.log(event);
    if (event == 'false')
      this.searchText = false
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
