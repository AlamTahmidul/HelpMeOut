import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './allComponents/main/landing/landing.component';
import { MainComponent } from './allComponents/main/main.component';
import { ProductsComponent } from './allComponents/main/products/products.component';
import { ReqformComponent } from './allComponents/main/reqform/reqform.component';
import { AppComponent } from './app.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'home', component: LandingComponent, canActivate:[AuthGuard] },
  {path: 'product-sell', component: ProductsComponent, canActivate:[AuthGuard] },
  {path: 'req-form', component: ReqformComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
