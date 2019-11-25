import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {

  @Input() appGridItemImage = '2rem';
  @Input() fitMode = 'cover';

  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.appGridItemImage);
    this.setStyle('height', this.appGridItemImage);
    this.setStyle('object-fit', this.fitMode);
  }

  private setStyle(styleName: string, styleValue: string){
    this.rd2.setStyle(this.elr.nativeElement, styleName, styleValue)
  }

  @HostListener('click', ['$event.target']) // 指令事件监听
  handleClick(e) {
    console.log(e);
  }

}
