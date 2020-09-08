import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdatesComponent } from './updates/updates.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdatesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
