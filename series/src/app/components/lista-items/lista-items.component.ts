import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { Serie } from 'src/app/interfaces/serie.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {

  // arrPersonajes: Personaje[] = [];
  // arrSeries: Serie[] = [];
  arrItems: Serie[] | Personaje[] | any = [];
  canal: string = "";
  titulo: string = "series";
  constructor(
    // private router: Router
    private activatedRoute: ActivatedRoute,
    private seriesServices: SeriesService,
    private personajesServices: PersonajesService
  ) { }

  ngOnInit(): void {
    this.titulo = this.activatedRoute.snapshot.url[0].path;
    // if(this.titulo === 'series')
    // {
    //   this.arrSeries = this.seriesServices.getAll()
    // } else {
    //   this.arrPersonajes = this.personajesServices.getAll()
    // }
    this.arrItems = (this.titulo ==='series') ? this.seriesServices.getAll() : this.personajesServices.getAll();
  }

  ngDoCheck() {
    let response = this.activatedRoute.snapshot.url
    if(response.length > 1)
    {
      this.canal = response[1].path;
      this.arrItems = this.seriesServices.getByChannel(this.canal)
    }
  }



}
