import { Component, OnInit } from '@angular/core';

 import { ApiService } from './shared';
import { MenuItem } from 'primeng/primeng';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

 export class AppComponent implements OnInit {
  title: string;
  private items: MenuItem[];

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }



   ngOnInit() {
     this.items = [
            {label: 'Home', icon: 'fa-home', routerLink: ['home'] },
            {label: 'Schedule', icon: 'fa-question-circle', routerLink: ['schedule']},
            {label: 'About', icon: 'fa-question-circle', routerLink: ['about']}
        ];
   }
}
