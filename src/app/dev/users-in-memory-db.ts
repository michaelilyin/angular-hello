import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs/internal/Observable';

export class UsersInMemoryDb implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const users = [
      {
        'id': 1,
        'login': 'frodobaggins',
        'email': 'frodo.baggins@middle-earth.com',
        'firstName': 'Frodo',
        'lastName': 'Baggins',
        'alive': true
      }, {
        'id': 2,
        'login': 'samwisegamgee',
        'email': 'samwise.gamgee@middle-earth.com',
        'firstName': 'Samwise',
        'lastName': 'Gamgee',
        'alive': true
      }, {
        'id': 3,
        'login': 'aragorn',
        'email': 'aragorn@middle-earth.com',
        'firstName': 'Aragorn',
        'lastName': null,
        'alive': true
      }, {
        'id': 4,
        'login': 'boromir',
        'email': 'boromir@middle-earth.com',
        'firstName': 'Boromir',
        'lastName': null,
        'alive': false
      }, {
        'id': 5,
        'login': 'gandalf',
        'email': 'gandalf@middle-earth.com',
        'firstName': 'Gandalf',
        'lastName': null,
        'alive': true
      }, {
        'id': 6,
        'login': 'beorn',
        'email': 'beorn@middle-earth.com',
        'firstName': 'Beorn',
        'lastName': null,
        'alive': null
      }
    ];
    return {users};
  }
}
