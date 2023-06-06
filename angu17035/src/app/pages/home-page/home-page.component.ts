
import { Component, NgModule } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {IProduct} from "../../interface/product"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent {
  books: any[] = [];

  constructor(private po:ProductService){
    this.po.getProduct().subscribe(data => {
      this.books = data.book.docs
      console.log(data.book.docs)
    })
  }
  // ngOnInit(): void {
  //   this.getBooks();
  // }

  // getBooks(): void {
  //   this.po.getProduct()
  //     .subscribe(response => {
  //       this.books = response.docs;
  //     });
  // }

}
