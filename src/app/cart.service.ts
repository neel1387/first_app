import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item = [];
  constructor() { }

  addToCart(product) {
    window.alert(JSON.stringify(this.item));
    this.item.push(product);
    const alertMessage = 'This product added in cart successfully.'
    window.alert(JSON.stringify(this.item));
    window.alert(alertMessage);
    return { item: this.item };
  }

  getCart() {
    return this.item;
  }

  clearCart() {
    this.item = []
    return this.item;
  }
}
