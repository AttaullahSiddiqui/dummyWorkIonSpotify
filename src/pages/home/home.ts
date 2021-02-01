import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  spliceNum: number = 10;
  mainArray = [];
  newArray = [];

  fetchTenFromArray() {
    this.newArray = this.mainArray.splice(this.spliceNum, 10);
    this.spliceNum += 10;
  }

  constructor(public navCtrl: NavController) {

  }
  onSeekStart() {

  }
  onSeekEnd() {

  }
}
