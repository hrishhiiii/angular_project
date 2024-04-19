// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LeoService {

//   constructor() { 
//     users(){
//       return[
//         {name:'hrishi',age:19,email:'hrishinathku2@gmail.com'},
//         {name:'messi',age:37,email:'leomessi@gmail.com'},
//         {name:'ullas',age:47,email:'mail2ullan@gmail.com'},
//       ];
//     }
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeoService {

  constructor() { 
  }

  users() {
    return [
      { name:'hrishi', age: 19, email:'hrishinathku2@gmail.com' },
      { name:'messi', age: 37, email:'leomessi@gmail.com' },
      { name:'ullas', age: 47, email:'mail2ullan@gmail.com' },
    ];
  }
}
