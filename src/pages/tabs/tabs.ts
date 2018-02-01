import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SevPage } from '../sev/sev';
import { MadPage } from '../mad/mad';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

 homePage = HomePage;
 sevillaPage = SevPage;
 madridPage = MadPage;

 constructor(){

 }
}
