import { ShoppingCart } from './../models/shopping.cart';
import { Observable } from 'rxjs/Observable';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'bs-nav-bar',
  templateUrl: './bs-nav-bar.component.html',
  styleUrls: ['./bs-nav-bar.component.css']
})
export class BsNavBarComponent implements OnInit {
  appUser : AppUser;
  cart$: Observable<ShoppingCart>

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    
  }
  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
   
  }

  logout() {
    this.auth.logout();
  }

}
