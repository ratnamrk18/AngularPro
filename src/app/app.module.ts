import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TestComponentComponent]
  //bootstrap: [TestComponentComponent]

})
export class AppModule { }
