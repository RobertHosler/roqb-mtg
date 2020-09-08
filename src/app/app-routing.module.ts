import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatesComponent } from './updates/updates.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

const routes: Routes = [
  {
    path: 'updates',
    component: MainLayoutComponent,
    children: [{ path: '', component: UpdatesComponent }],
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
