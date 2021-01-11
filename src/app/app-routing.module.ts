import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontnavComponent } from './frontnav/frontnav.component';
const routes: Routes = [
  {path:'frontnav',component:FrontnavComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  { path:'addproduct',component:AddproductComponent},
  { path:'productlist',component:ProductlistComponent},
  { path:'updateproduct/:id',component:UpdateproductComponent},
  { path:'productdetails',component:ProductdetailsComponent},
  {path:'logout',component:LogoutComponent},
  { path:'productdetails',redirectTo:'',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
