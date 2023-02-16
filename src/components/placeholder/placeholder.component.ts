import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'webex-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {

  constructor(private viewContainerRef: ViewContainerRef) { 

  }

  fitHeight(usedHeight: number) {
    let windowHeight = window.innerHeight || document.body.clientHeight;
    this.viewContainerRef.element.nativeElement.style.height = windowHeight - usedHeight + 'px';
  }

}
