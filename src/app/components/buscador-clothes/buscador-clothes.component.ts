import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {ClothesService} from '../../services/clothes.service';

@Component({
  selector: 'app-buscador-clothes',
  templateUrl: './buscador-clothes.component.html',
  styleUrls: ['./buscador-clothes.component.css']
})
export class BuscadorClothesComponent implements OnInit {

  
  ropas:any[] = [];

  constructor(private params:ActivatedRoute, private clothes:ClothesService) {
    this.params.params.subscribe(params=>{
      this.ropas=this.clothes.buscaropa(params['nombre']);
    })
   }

  ngOnInit() {
  }

}
