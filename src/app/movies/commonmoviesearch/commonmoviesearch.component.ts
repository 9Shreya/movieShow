import {ApiServiceService} from './../../api-service.service';
import {Component,OnInit,Input} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-commonmoviesearch',
  templateUrl: './commonmoviesearch.component.html',
  styleUrls: ['./commonmoviesearch.component.scss']
})
export class CommonmoviesearchComponent implements OnInit {

  constructor(private service: ApiServiceService) {}
  @Input() movies: any;
  @Input() valueScroll: any;
  @Input() page: any;
  @Input() searchdata: any;

  ngOnInit(): void {
    $('.modal').on('hidden.bs.modal',() => {
      this.getPages()
    })

  }
  title = ''
  discription = ''
  genres = ''
  arrayOfMain = []
  getPages() {
    console.log(this.page);
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


      },
      (error) => {

        console.log(error)
        // this.toast.warning('Sorry Something went worng !!!')
        $('#exampleModal').modal('show');

      })



  }
  openModal(item: any) {
    console.log(item);
    this.title = item.title
    this.discription = item.description
    this.genres = item.genres
    $('#1exampleModal').modal('show');

  }
  loadMoreNext(page: any) {
    console.log(page);

    this.page = this.page + 1;
    this.getPages()
  }
}
