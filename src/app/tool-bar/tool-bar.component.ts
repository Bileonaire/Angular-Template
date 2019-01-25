import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input()
  isSideNavOpen: Boolean;

  @Output()
  isSideNavOpenChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {}

  ngOnInit() {}

  toggleSideNav = () => {
    this.isSideNavOpenChange.emit(!this.isSideNavOpen);
  }
}
