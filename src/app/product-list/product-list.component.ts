import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products
  constructor() { }

  ngOnInit() {
  }

  onShare(){
    const alertMessage = 'You shared this item successfully.'
    return window.alert(alertMessage);
  }
  
  onNotify(){
    const alertMessage = 'You will be notified once available in stock.'
    return window.alert(alertMessage);
  }

}
