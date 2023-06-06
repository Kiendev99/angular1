import {  OnInit } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {
 foods:Food[] =[];
 constructor (private foodService: FoodService, activatedRoute:ActivatedRoute, private cartService: CartService, private router: Router){
  let foodsObservable:Observable<Food[]>
  activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
    else if (params.tag)
    foodsObservable = this.foodService.getAllFoodsByTag(params.tag)
    else
    foodsObservable = foodService.getAll();
    
    foodsObservable.subscribe((serverFoods)=>{
      this.foods = serverFoods;
      
    })
  })
  
 }
 ngOnInit(): void {
   
 }

}
