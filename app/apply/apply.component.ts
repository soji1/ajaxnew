import { Component, OnInit } from '@angular/core';
import {student} from '../student';
import{NgForm} from '@angular/forms';
import { from } from 'rxjs';
import{ ServiceService } from '../service.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
student =new student();
isReistered = false;
  constructor(private applyService: ServiceService) { }

  ngOnInit() {
    
  }
    registration(f: NgForm){this.applyService.store(this.student).subscribe(data => {this.isReistered=true;
    console.log("Registered Successfully")
    f.reset();
    },
    (err) => {this.isReistered=false;});
  }
    }
   
