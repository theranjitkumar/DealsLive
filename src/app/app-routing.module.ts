import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/', pathMatch: 'full'
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "disclaimer",
    component: DisclaimerComponent,
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
  },
  {
    path: "shop",
    component: ShopComponent,
  },
  {
    path: "details/:productName",
    component: ProductDetailComponent,
  },
  {
    path: ":searchStr",
    component: SearchResultComponent,
  },
  {
    path: "search/:searchStr",
    component: SearchResultComponent,
  },
  {
    path: "search/:s",
    component: SearchResultComponent,
  },
  {
    path: "**",
    redirectTo: "",
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
