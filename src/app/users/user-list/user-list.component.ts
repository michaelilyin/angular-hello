import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User, UsersService} from '@app-users/services/users.service';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Output()
  public selectedUser = new EventEmitter<number>();

  public users$: Observable<User[]>;
  public isLoad: boolean = false;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.refresh();
  }

  userTrack(user: User): number {
    return user.id;
  }

  refresh() {
    this.isLoad = true;
    this.users$ = this.userService.getAllUsers()
      .pipe(
        tap(() => {
          console.info('load complete');
          this.isLoad = false;
        })
      );
  }

}
