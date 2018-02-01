import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nomeQualquer = "user name";

  constructor(public navCtrl: NavController) {

  }

  public alerta(): void{
    alert("ai....alertou");
  }

  openFirstPage(){
    this.navCtrl.push(FirstPage);
  }

}
