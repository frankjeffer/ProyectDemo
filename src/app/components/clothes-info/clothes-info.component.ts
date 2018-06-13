import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {ClothesService} from '../../services/clothes.service';

@Component({
  selector: 'app-clothes-info',
  templateUrl: './clothes-info.component.html',
  styleUrls: ['./clothes-info.component.css']
})
export class ClothesInfoComponent implements OnInit {

  clothes:any[]=[];

  constructor(private ParamsRouter:ActivatedRoute, private ropaServicio:ClothesService) { 
    this.ParamsRouter.params.subscribe(params=>{
      this.clothes = this.ropaServicio.obtenerropa(params['id']);
    })
  }

  ngOnInit() {
  }

}
