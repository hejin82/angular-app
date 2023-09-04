import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users:User[] = [
      {id: 1, first_name: 'firstname', last_name: 'lastname', avatar: ''},
      {id: 2, first_name: 'firstname2', last_name: 'lastname2', avatar: ''},
    ]
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11
  }


}
