import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any;
check:boolean=true;
  constructor() {
    this.user={
      name:'Jesteena',
  Address:'Manayathumalil',
Phone:['123']};
   }
togglecheck(){
  this.check=!this.check;
}
  ngOnInit() {
  }

}
