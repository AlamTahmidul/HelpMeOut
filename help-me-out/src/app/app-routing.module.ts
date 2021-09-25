import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './allComponents/main/landing/landing.component';
import { MainComponent } from './allComponents/main/main.component';
import { AppComponent } from './app.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service'
const routes: Routes = [{path: '', component: MainComponent},
{path: 'home', component: LandingComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
