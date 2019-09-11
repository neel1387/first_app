import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product = null;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    const productId: string = this.route.snapshot.params["productId"];
    this.product = products[+productId]
    // this.route.paramMap.subscribe(params => {
    //   this.product = products[+params.get('productId')];
    // });
  }


  onAddToCart(product) {
    return this.cartService.addToCart(product);
  }


}
