import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Session } from '../../providers/session/session';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: UsersProvider;
  http: Http;

  constructor(public navCtrl: NavController, public session: Session) {
    
  }

  createSession() {    
    this.user = new UsersProvider(this.http);
    this.session.create(this.user);
  }

}
