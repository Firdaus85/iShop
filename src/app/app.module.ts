import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, CanActivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
//import { DataTableModule } from 'angular-4-data-table';
import {DataTableModule} from 'angular5-data-table';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BsNavBarComponent } from './bs-nav-bar/bs-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuardService as AdminAuthGuard, AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    [NgbModule],
    RouterModule.forRoot([
      {path:'', component: ProductsComponent},
      {path:'products', component: ProductsComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},

      {path:'login', component: LoginComponent},

      {path:'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path:'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      {path:'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},


      {path:'admin/products/new',
      component: ProductFormComponent,
      canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {path:'admin/products/:id',
      component: ProductFormComponent,
      canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {path:'admin/products',
       component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {path:'admin/orders',
       component: AdminOrdersComponent,
       canActivate: [AuthGuardService, AdminAuthGuardService]
      },
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
