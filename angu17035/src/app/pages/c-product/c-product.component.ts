import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Router } from '@angular/router';
@Component({
  selector: 'app-c-product',
  templateUrl: './c-product.component.html',
  styleUrls: ['./c-product.component.css']
})
export class CProductComponent implements OnInit {
  food?: Food;
  constructor (activateRoute: ActivatedRoute, foodService: FoodService, private cartService: CartService, private router: Router){
    activateRoute.params.subscribe((params)=>{
      if(params.id)
      foodService.getFoodById(params.id).subscribe(serverFood => {
        serverFood;
      })
    })
  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart');
  }

}
