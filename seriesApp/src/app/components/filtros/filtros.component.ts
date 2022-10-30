import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  activate: boolean = true;
  arrCanales: string[] = [];
  constructor(
    private seriesService: SeriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arrCanales = this.seriesService.getAllChanels();
  }

  ngDoCheck() {
    let path = window.location.pathname;
    this.activate = (path.includes('personaje')) ? false : true;
  }

  capturarCanal($event: any) {
    if($event.target.value === 'todas') {

      this.router.navigate(['/series'])
    } else {
      this.router.navigate(['/canal', $event.target.value])

    }
    
  }

}
