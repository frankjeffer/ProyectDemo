import { Injectable } from '@angular/core';

export interface clothesRules{
  id:number,
  nombre:string,
  imagen:string,
  tipo:string,
  descripcion:string
}

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  
  clothes:clothesRules[]=[
    {
      "id":0,
      "nombre":"blusa",
      "imagen":"blusa.jpg",
      "tipo":"sport",
      "descripcion":"blusa de mujer color blanco con puntos negros "
    },
    {
      "id":1,
      "nombre":"camisa",
      "imagen":"camisa.jpg",
      "tipo":"formal",
      "descripcion":"camisa de hombre color blanco "
    },
    {
      "id":2,
      "nombre":"casaca",
      "imagen":"casaca.jpg",
      "tipo":"sport",
      "descripcion":"casaca de cuero color negro "
    },
    {
      "id":3,
      "nombre":"falda",
      "imagen":"falda.jpg",
      "tipo":"formal",
      "descripcion":"falda de mujer de color morado"
    },
    {
      "id":4,
      "nombre":"pantalon",
      "imagen":"pantalon.jpg",
      "tipo":"sport",
      "descripcion":"pantalon jeans de color azul "
    },
    {
      "id":5,
      "nombre":"polo",
      "imagen":"polo.jpg",
      "tipo":"sport",
      "descripcion":"polo de hombre con cuello de color azul"
    },
    {
      "id":6,
      "nombre":"short",
      "imagen":"short.jpg",
      "tipo":"sport",
      "descripcion":"short de hombres color amarrillo"
    },
    {
      "id":7,
      "nombre":"vestido",
      "imagen":"vestido.jpg",
      "tipo":"formal",
      "descripcion":"vestido eleante de mujer color rojo "
    }
  ];

  obtenerclothes(){
    return this.clothes;
  }

  obtenerropa(id:number){
    let ropaArr=[];
    for(let ropa of this.clothes){
      if(ropa.id == id){
        ropaArr.push(ropa);
      }
    }
    return ropaArr;
  }

  buscaropa(termino:string){
    let ropArr = [];
    termino = termino.toLowerCase();
    for(let ropa of this.clothes){
      let nombre = ropa.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
          ropArr.push(ropa);
      }
    }
    return  ropArr;
  }

  constructor() { }
}
