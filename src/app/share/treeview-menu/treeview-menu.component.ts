import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../redux/slidebar/action';
import { Router } from '@angular/router';
let defaultItem = {
  children: []
}

@Component({
  selector: 'ul.treeview-menu',
  templateUrl: './treeview-menu.component.html',
  styleUrls: ['./treeview-menu.component.css']
})
export class TreeviewMenuComponent implements OnInit {
  _item: any = {
    children: []
  };
  @Input() level: number = 1;
  @Input() 
  set item(val: any){
    val = val || defaultItem;
    this._item = {...defaultItem,...val}
  }

  @Output() onToggle: EventEmitter<any> = new EventEmitter()
  constructor(
    public store$: Store<any>,
    public router: Router
  ) { }

  ngOnInit() {

  }

  onBackToggle(e: any){
    this._item = e;
    this.onToggle.emit(e);
  }

  onClickChild(e: any,father: any,item: any){
    e.stopPropagation();
    father.children.map(res=>{
      if(res === item){

      }else{
        res.active = false;        
      }
    });
    item.active = !item.active;
    item.link && this.router.navigate(item.link)
  }

}
