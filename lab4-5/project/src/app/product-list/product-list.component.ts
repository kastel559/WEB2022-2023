import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[] = products; 
  filtered_prod = [...products];
  selectedCategory :string = "None";



  share() {
    window.alert('Telegram: ' + "https://t.me/share/url?url=" +products[0].link);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  filteredByCategory(value: string){
    this.selectedCategory = value;
    console.log("work")
    this.updateByCategory();
  }

  updateByCategory(){
    if(this.selectedCategory == "None") {
      this.filtered_prod = this.products;
    }
    else {
      this.filtered_prod = this.products.filter(p => p.category === this.selectedCategory);
    }
  }

  pressLike(id : number){
    products.filter(p => p.id === id).map(p => p.like += 1)
  }

  deleteProduct(id : number){
    this.products = this.products.filter(p => p.id !== id);
    this.updateByCategory()
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/