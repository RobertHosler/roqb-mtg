import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { UpdatesComponent } from './updates/updates.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { UsersComponent } from './users/users.component';
import { DevComponent } from './dev/dev.component';
import { GamerComponent } from './gamer/gamer.component';
import { ArtComponent } from './art/art.component';
import { PersonComponent } from './person/person.component';
import { ResumeComponent } from './dev/resume/resume.component';
import { ImgListComponent } from './components/img-list/img-list.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { WriteComponent } from './write/write.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { VpSectionComponent } from './components/vp-section/vp-section.component';
import { CreatorComponent } from './pages/creator/creator.component';
import { PersonalComponent } from './pages/dev/personal/personal.component';
import { WhyQComponent } from './pages/person/why-q/why-q.component';


const socketConfig: SocketIoConfig = { url: 'http://localhost:3080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UpdatesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeLayoutComponent,
    UsersComponent,
    DevComponent,
    GamerComponent,
    ArtComponent,
    PersonComponent,
    ResumeComponent,
    ImgListComponent,
    SocialLinksComponent,
    WriteComponent,
    PageHeadingComponent,
    VpSectionComponent,
    CreatorComponent,
    PersonalComponent,
    WhyQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure App with AmplifyAuthenticatorModule */
    AmplifyAuthenticatorModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(socketConfig),
    TabsModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
