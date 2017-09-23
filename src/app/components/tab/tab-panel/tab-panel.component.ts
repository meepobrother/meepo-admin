import {
  Directive,
  OnInit,
  Input,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: 'app-tab-panel,[app-tab-panel],[appTabPanel]'
})
export class TabPanelComponent implements OnInit {
  @Input() title: string = 'panel 1';
  active: boolean = false;

  constructor(
    public templateRef: TemplateRef<any>
  ) {
    console.log('TabPanelComponent');
  }

  ngOnInit() {
  }

  doActive() {
    this.active = true;
  }

  doUnActive() {
    this.active = false;
  }

}
