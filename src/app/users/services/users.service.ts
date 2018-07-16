import {Injectable, Provider} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {ListResponse} from '@app-shared/api/model';

export interface User {
  id: number;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  alive: boolean;
}

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`api/users/${id}`);
  }

  public save(user: User): Observable<void> {
    return this.http.put<void>(`api/users/${user.id}`, user);
  }
}

export const UsersServiceProvider: Provider = {
  provide: UsersService,
  useClass: UsersService
};


