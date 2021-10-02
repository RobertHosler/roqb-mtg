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
import { CreatorComponent } from './pages/creator/creator.component';
import { WhyQComponent } from './pages/person/why-q/why-q.component';
import { PersonalComponent } from './pages/dev/personal/personal.component';

export const routes: Routes = [
  {
    path: 'dev',
    data: { name: 'Developer', header: true },
    component: MainLayoutComponent,
    children: [
      { path: '', component: DevComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'personal', component: PersonalComponent },
    ],
  },
  {
    path: 'creator',
    data: { name: 'Creator', header: true },
    component: MainLayoutComponent,
    children: [
      { path: '', component: CreatorComponent },
      { path: 'artist', component: ArtComponent },
      { path: 'writer', component: WriteComponent },
    ],
  },
  {
    path: 'person',
    data: { name: 'Person', header: true },
    component: MainLayoutComponent,
    children: [
      { path: '', component: PersonComponent },
      { path: 'why-q', component: WhyQComponent },
      { path: 'gamer', component: GamerComponent },
    ],
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
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
