import { Component, OnInit, Input, ContentChild, ViewChild, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { PermissionContentDirective, ErrorPermissionDirective } from '../../directive';
@Component({
  selector: '[permission-container], permission-container',
  templateUrl: './permission-container.component.html',
  styleUrls: ['./permission-container.component.scss']
})
export class PermissionContainerComponent implements OnInit, OnChanges {

  @Input() permission: string;
  @ContentChild(PermissionContentDirective) permissionContentDirective: PermissionContentDirective;
  @ContentChild(ErrorPermissionDirective) errorPermissionDirective: ErrorPermissionDirective;
  @ViewChild(ErrorPermissionDirective) defaultErrorPermission: ErrorPermissionDirective;
  constructor() { }

  ngOnInit() {
    this.errorPermissionDirective = this.defaultErrorPermission;
  }

  ngOnChanges(changes: SimpleChanges) {
    const errorPermissionDirective = changes['errorPermissionDirective'].currentValue;
  }

}
