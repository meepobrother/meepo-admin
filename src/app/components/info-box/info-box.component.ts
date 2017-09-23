import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  @Input() icon: string;
  @Input() color: string;

  @Input() text: string;
  @Input() number: string;
  @Input() unit: string;

  constructor() { }

  ngOnInit() {
  }

}
