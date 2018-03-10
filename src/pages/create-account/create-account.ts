import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = 'sydney@fife';
    this.model.password = 'pistol';
  }

  createAccount() {
    if (this.validatePassword(this.model.password, this.model.confirmPassword)) {
    this.userProvider.createAccount(this.model.login, this.model.email, this.model.password, this.model.langKey)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso.', position: 'botton', duration: 3000 }).present();

        this.cleanFields();
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
    } else {
      this.toast.create({ message: 'SENHAS ERRADAS', position: 'botton', duration: 3000 }).present();
    }
  }
  
  validatePassword(password: string, confirm: string) {

    if (password.length < 4 ) {
      return false;
    }

    if (password != confirm || password.length != confirm.length) {
      return false;
    }

    return true;
  }

  cleanFields() {
    this.model.email = "";
    this.model.langKey = "";
    this.model.login = "";
    this.model.password = "";
    this.model.confirmPassword = "";    
  }

}


export class User {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
  langKey: string = "pt-br";
}