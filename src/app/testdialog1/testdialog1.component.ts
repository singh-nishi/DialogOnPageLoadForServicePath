import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../providers/app-service';

@Component({
  selector: 'app-testdialog1',
  templateUrl: './testdialog1.component.html',
  styleUrls: ['./testdialog1.component.css']
})
export class Testdialog1Component implements OnInit {

  constructor(private router: Router,private appService:AppService) {
    
   }

  ngOnInit() {
    this.appService.controledialog=true
  }

  callDialog() {
    this.appService.controledialog=true;
  }

}
