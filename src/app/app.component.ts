import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'BP3VWmpCk5xtsqH8AcWTKanR0I2o3mko-gz0m-tkzCmz9hS-x0230GmER-lEPu4J0bv0Ok25XY94pp-zA-r4iwY',
  databaseURL: 'https://angularchat-poc-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
