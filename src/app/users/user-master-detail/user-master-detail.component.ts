import {Component, OnInit, ViewChild} from '@angular/core';
import {UserListComponent} from '@app-users/user-list/user-list.component';

@Component({
  selector: 'app-user-master-detail',
  templateUrl: './user-master-detail.component.html',
  styleUrls: ['./user-master-detail.component.scss']
})
export class UserMasterDetailComponent implements OnInit {

  @ViewChild('userList', {read: UserListComponent})
  public userList: UserListComponent;

  public selectedUser: number;

  constructor() { }

  ngOnInit() {
  }

  onUserCardClose(result: boolean) {
    if (result) {
      this.userList.refresh();
    }
    this.selectedUser = null;
  }
}
