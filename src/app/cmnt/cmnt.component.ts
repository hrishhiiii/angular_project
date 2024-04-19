import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmnt',
  templateUrl: './cmnt.component.html',
  styleUrls: ['./cmnt.component.css']
})
export class CmntComponent implements OnInit {
  public value:number=0
  public counter(){
    this.value++;
  }
  public sub(){
    this.value--;
  }
  constructor(){}
  ngOnInit(): void {
      
  }

}
