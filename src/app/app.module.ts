import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutRoutingModule } from './core/layout/ui/layout/layout-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/ui/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
