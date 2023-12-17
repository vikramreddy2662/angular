import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class containerComponent {

  name = "vikram reddy"

  addToCart: number = 0;

  // name:String="OnePlus Nord 9"
  // price:number=500
  // color:String="blue"

  product = {
    name: "OnePlus Nord 9",
    price: 500,
    color: "blue",
    pImage: "assets/images/oneplus.jpg",
    inStock: 5

  }

  getDiscount() {

    return this.product.price - (5017 / 50);

  }

  getInputValue(event: any) {

    this.name = event.target.value;
    //console.log(event.target.value);


  }

  getIncrement() {

    if(this.addToCart<this.product.inStock)

    this.addToCart++;
 
  }

  getDecrement() {
    if(this.addToCart>0)

    this.addToCart--;
  }
}





