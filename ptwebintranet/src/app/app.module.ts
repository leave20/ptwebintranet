import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavegationComponent } from './layout/navegation/navegation.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavegationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
 {
    provide: LocationStrategy,
    useClass: PathLocationStrategy

 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
