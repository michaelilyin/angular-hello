import {NgModule} from '@angular/core';
import {SharedModule} from '@app-shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from '@app-users/users.component';
import {UserMasterDetailComponent} from '@app-users/user-master-detail/user-master-detail.component';
import {UserListComponent} from '@app-users/user-list/user-list.component';
import {UserDetailComponent} from '@app-users/user-detail/user-detail.component';
import {UsersRoutingModule} from '@app-users/users.routing.module';
import {UsersServiceProvider} from '@app-users/services/users.service';
import {CommonModule} from '@angular/common';
import {environment} from '../../environments/environment';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {UsersInMemoryDb} from '../dev/users-in-memory-db';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserMasterDetailComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,

    SharedModule,

    environment.production ? [] : HttpClientInMemoryWebApiModule.forFeature(UsersInMemoryDb)
  ],
  providers: [
    UsersServiceProvider
  ]
})
export class UsersModule {

}
