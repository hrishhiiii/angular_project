// import { Component } from '@angular/core';
// import { LeoService } from './leo.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'sample_2';
//   users=any
//   constructor(private,servicename:LeoService)
//   {
//     console.warn(LeoService.users());
//     this.users=LeoService.users();
//   }
// }


import { Component } from '@angular/core';
import { LeoService } from './leo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample_2';
  users: any;

  constructor(private leoService: LeoService) {
    console.warn(this.leoService.users());
    this.users = this.leoService.users();
  }
}


