import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatesComponent } from './updates/updates.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { UsersComponent } from './users/users.component';
import { DevComponent } from './dev/dev.component';
import { GamerComponent } from './gamer/gamer.component';
import { ArtComponent } from './art/art.component';
import { PersonComponent } from './person/person.component';
import { ResumeComponent } from './dev/resume/resume.component';
import { WriteComponent } from './write/write.component';

export const routes: Routes = [
  {
    path: 'dev',
    data: { name: 'Developer', header: true },
    component: MainLayoutComponent,
    children: [
      { path: '', component: DevComponent },
      { path: 'resume', component: ResumeComponent },
    ],
  },
  {
    path: 'write',
    data: { name: 'Writer', header: true },
    component: MainLayoutComponent,
    children: [{ path: '', component: WriteComponent }],
  },
  // {
  //   path: 'gamer',
  //   data: { name: 'Gamer', header: true },
  //   component: MainLayoutComponent,
  //   children: [{ path: '', component: GamerComponent }],
  // },
  {
    path: 'art',
    data: { name: 'Artist', header: true },
    component: MainLayoutComponent,
    children: [{ path: '', component: ArtComponent }],
  },
  {
    path: 'person',
    data: { name: 'Person', header: true },
    component: MainLayoutComponent,
    children: [{ path: '', component: PersonComponent }],
  },
  {
    path: 'updates',
    data: { name: 'Release Info', header: false },
    component: MainLayoutComponent,
    children: [{ path: '', component: UpdatesComponent }],
  },
  {
    path: 'users',
    data: { name: 'Users', header: false },
    component: MainLayoutComponent,
    children: [{ path: '', component: UsersComponent }],
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
