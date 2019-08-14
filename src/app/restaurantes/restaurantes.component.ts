import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[ OfertasService ]
})
export class RestaurantesComponent implements OnInit {


  public ofertas: Oferta[]

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {

    this.ofertaService.getOfertasServicePorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas)
        this.ofertas = ofertas
      })
  }

}
