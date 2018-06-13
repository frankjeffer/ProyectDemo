import { Component, OnInit } from '@angular/core';

//servicios
import {ClothesService,clothesRules} from '../../services/clothes.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothes:clothesRules[]=[];

  constructor(private _clothes:ClothesService) { }

  ngOnInit() {
    this.clothes =this._clothes.obtenerclothes();
  }

}
