import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'test-md',
  templateUrl: './test-md.component.html',
  styleUrls: ['./test-md.component.css']
})
export class TestMdComponent implements OnInit {
  id: any = new Date().getTime();

  constructor() {
  }

  ngOnInit() {
  }

}
