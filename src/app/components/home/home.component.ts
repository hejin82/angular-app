import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users: User[] = []

  constructor(
    private reqresService: ReqresService,
    private router: Router) {
    this.getUsers();
  }

  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        console.log(res);
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  userDetails(id: number) {
    console.log('userid:', id);
    this.router.navigate(['user', id]);
  }
}
