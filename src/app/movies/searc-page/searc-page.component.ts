import {MovieCardsComponent} from './../movie-cards/movie-cards.component';
import {ApiServiceService} from './../../api-service.service';
import {CommonmoviesearchComponent} from './../commonmoviesearch/commonmoviesearch.component';
import {Component,OnInit,Input,ViewChild,Output,EventEmitter,HostListener,Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DOCUMENT} from '@angular/common';

declare var $: any
@Component({
  selector: 'app-searc-page',
  templateUrl: './searc-page.component.html',
  styleUrls: ['./searc-page.component.scss']
})
export class SearcPageComponent implements OnInit {
  @ViewChild('searchForm') searchForm?: NgForm

  constructor(private service: ApiServiceService,@Inject(DOCUMENT) private document: Document,) {}
  @Input() page: any;
  @Input() searchText: any;
  theme: any;

  ngOnInit(): void {
    console.log(this.searchText);
    this.movies = this.searchText
    $('.modal').on('hidden.bs.modal',() => {
      this.getPages()
    })

    let val = localStorage.getItem('theme')
    if (val == 'dark') {
      this.theme = 'dark'
    }
    else {
      this.theme = 'light'
    }
  }
  movies = []
  valueScroll = 0
  searchMovies = []
  searchValueText = ''
  search: boolean = true
  textChange() {

    this.searchMovies = []
    console.log(this.searchForm?.value.searchTerm);
    // this.route.navigate(["/movies/search"])
    if (this.searchForm?.value.searchTerm?.length > 2 && this.searchForm?.valid) {
      // const formValue = this.searchForm?.valueChanges;
      // formValue?.pipe(
      //   map(data => data.searchTerm),
      //   debounceTime(250),
      //   distinctUntilChanged(),
      // ).subscribe((res) => {
      let val = this.searchForm?.value.searchTerm.toLowerCase()
      this.searchMovies = this.movies.filter((data: any) => {
        console.log(this.searchMovies,data.title?.toLowerCase().includes(val),val);
        return data.title?.toLowerCase().includes(val) ||
          data.description?.toLowerCase().includes(val) ||
          data.genres?.toLowerCase().includes(val)
      })
      //this.searchText = true
      console.log(this.searchMovies);
      this.movies = this.searchMovies
      if (this.movies.length == 0) {
        this.movies = this.searchText
      }
    }
  }

  loadMoreNext(page: any) {
    console.log(page);

    this.page = this.page + 1;
    this.getPages()
  }
  getPages() {
    console.log(this.page);

    this.service.getMovies(this.page).subscribe(
      (res: any) => {


        console.log(res);
        this.searchText = [...this.movies,...res.results]

        console.log(this.movies);
        this.movies = this.searchText

      },
      (error) => {

        console.log(error)
        // this.toast.warning('Sorry Something went worng !!!')
        $('#exampleModal').modal('show');

      })
  }
  @Output() event1 = new EventEmitter();
  back() {
    this.event1.emit('false')
  }

  @HostListener("window:scroll",[]) onWindowScroll() {
    //.scrollTop
    this.valueScroll = this.document.documentElement.scrollTop;

    console.log(this.document.documentElement.scrollTop)

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
