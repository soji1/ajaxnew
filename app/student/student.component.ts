import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() Rollno:string;
  @Input() name:string;
  @Input() Batch:string;
  @Input() Department:string;
  @Output() sendBook:EventEmitter<any>=new EventEmitter();
  selectstudent(){
    let selectedbook:any={sRollno:this.Rollno,
    sname:this.name,
  sBatch:this.Batch,
  sDepartment:this.Department};
  this.sendBook.emit(selectedbook);
    }
  constructor() {}

  ngOnInit() {
  }

}
