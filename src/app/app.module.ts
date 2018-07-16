import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {environment} from '../environments/environment';
import {UsersInMemoryDb} from './dev/users-in-memory-db';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    // environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(null, )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
