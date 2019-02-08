import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public Studdetails:any=[{Rollno:"1",name:"asd",Batch:"Batch 1",Department:"MCA"},
  {Rollno:"2",name:"qwe",Batch:"Batch 2",Department:"MBA"},
  {Rollno:"3",name:"ert",Batch:"Batch 3",Department:"MS"}];
  
  selbook:any;
  addBook(data:any){
    this.selbook=data;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
