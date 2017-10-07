import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../providers/app-service';
@Component({
  selector: 'app-testdialog',
  templateUrl: './testdialog.component.html',
  styleUrls: ['./testdialog.component.css']
})
export class TestdialogComponent implements OnInit {

  constructor(private appService:AppService) {


  }

  ngOnInit() {
    this.appService.controledialog=true;
  }

}
