import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.component.html',
  styleUrls: ['./vista-personaje.component.css']
})
export class VistaPersonajeComponent implements OnInit {

  personaje: Personaje | any;
  nombreSerie: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajesService,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idpersonaje);
      this.personaje = this.personajesService.getById(id)
      let serie = this.seriesService.getById(this.personaje.serie)
      this.nombreSerie = serie.titulo;
    } )
  }

}
