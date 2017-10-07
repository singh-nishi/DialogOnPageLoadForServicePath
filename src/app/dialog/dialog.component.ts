import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AppService } from '../providers/app-service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  ip: string = "192.168.3.1";
  @Input() closable = true;
  @Input() visible: boolean;
  // @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.visible = true;
    // this.showDialog = true;
    }

  close() {
    if(this.visible){
      alert(this.ip);
    }
    this.visible = false;
    this.appService.controledialog=false;
    // this.visibleChange.emit(this.visible);
  }

}
