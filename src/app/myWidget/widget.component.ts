/**
 * Created by alokpandhare on 5/17/17.
 */
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less']
})

export class WidgetComponent {
  @ViewChild('red2') colorValueRed: any;
  @ViewChild('green2') colorValueGreen: any;
  @ViewChild('blue2') colorValueBlue: any;
  changeBorder(val: any) {
    // alert(val);
    if (val === 'blue') {
      // console.log(this.colorValue);
      // document.getElementById('blue').style.border = '2px solid white';
      this.colorValueBlue.nativeElement.style.border = '2px solid white';
    }
    if (val === 'red') {
      console.log('in red');
      // document.getElementById('red').style.border = '2px solid white';
      this.colorValueRed.nativeElement.style.border = '2px solid white';
    }
    if (val === 'green') {
      // document.getElementById('green').style.border = '2px solid white';
      this.colorValueGreen.nativeElement.style.border = '2px solid white';
    }
  }
}
