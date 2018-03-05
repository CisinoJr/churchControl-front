import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersProvider } from '../users/users';
import { Storage } from "@ionic/storage";
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Session {

    constructor(public storage: Storage){

    }
    // setando uma seção e passando o tipo de usuário
    create(usuario: UsersProvider) {
        this.storage.set('usuario', usuario);
    }

    get(): Promise<any> {
        return this.storage.get('usuario');
    }

    // Quando deslogar deve remova do storage
    remove() {
        this.storage.remove('usuario');
    }

    exist() {
        this.get().then(res => {
            console.log('resultado >>> ', res);
            if(res) {
                console.log('resultado IF');
                return true;
            } else {
                console.log('resultado else');
                return false;
            }
        });
    }
}