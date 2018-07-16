import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '@app-users/users.component';
import {UserMasterDetailComponent} from '@app-users/user-master-detail/user-master-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [{
      path: '',
      component: UserMasterDetailComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
