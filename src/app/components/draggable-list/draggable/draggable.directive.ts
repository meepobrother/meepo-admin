import { Directive, HostListener, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDraggable],[draggable],[app-draggable][dragTag][dragData][draggedClass]'
})
export class DraggableDirective implements OnInit {
  private _isDraggable = false;

  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.renderer2.setAttribute(this.ele.nativeElement, 'draggable', `${val}`)
  }
  get isDraggable() {
    return this._isDraggable;
  }

  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;

  constructor(
    public ele: ElementRef,
    public renderer2: Renderer2
  ) { }

  ngOnInit() { }
  // 在拖动操作开端运行的脚本。
  @HostListener('dragstart', ['$event'])
  ondragstart(event) {
    event.preventDefault();
    this.renderer2.addClass(this.ele.nativeElement, this.draggedClass);
    console.log(event);
  }
  // 在拖动操作末端运行的脚本。
  @HostListener('dragend', ['$event'])
  ondragend(event) {
    event.preventDefault();
    this.renderer2.removeClass(this.ele.nativeElement, this.draggedClass);
    console.log(event);
  }
  // 当元素元素已被拖动到有效拖放区域时运行的脚本。
  ondragenter() {

  }
  // 当元素离开有效拖放目标时运行的脚本。
  ondragleave() {

  }
  // 当元素在有效拖放目标上正在被拖动时运行的脚本。
  ondragover() {

  }
  // 当被拖元素正在被拖放时运行的脚本。
  ondrop() {

  }
}
