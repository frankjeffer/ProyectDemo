import {RouterModule,Routes} from '@angular/router'; 

import { HomeComponent } from './components/home/home.component';

import { ClothesComponent } from './components/clothes/clothes.component';

import {ClothesInfoComponent} from './components/clothes-info/clothes-info.component';

import {BuscadorClothesComponent} from './components/buscador-clothes/buscador-clothes.component';

const routes:Routes=[
    {path:'home', component:HomeComponent},
    {path:'clothes', component:ClothesComponent},
    {path:'clothe/:id', component:ClothesInfoComponent},
    {path:'search/:nombre', component:BuscadorClothesComponent},
    {path: '**' , redirectTo:"home"}
];

export const CLO_ROUTING = RouterModule.forRoot(routes);