import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User, UsersService} from '@app-users/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnChanges {

  @Input()
  public selectedUser: number;

  @Output()
  public close = new EventEmitter<boolean>();

  public user: User;
  public isSaving: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser']) {
      const id = changes['selectedUser'].currentValue as number;
      if (id) {
        this.usersService.getUser(id).subscribe(user => {
          this.user = user;
        });
      } else {
        this.user = null;
      }
    }
  }

  save() {
    this.isSaving = true;
    this.usersService.save(this.user).subscribe(() => {
      this.isSaving = false;
      this.close.next(true);
    });
  }

  cancel() {
    this.close.next(false);
  }

}
