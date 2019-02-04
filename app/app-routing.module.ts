import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ProfileComponent } from './profile/profile.component'
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:"h",component:ProfileComponent},
{path:"l",component:ApplyComponent},
{path:"l",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
