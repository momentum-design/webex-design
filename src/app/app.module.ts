import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule, FooterModule } from '@lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeaderModule,
    FooterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (title: Title) => () => title.setTitle('Webex Design'),
      deps: [Title],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
