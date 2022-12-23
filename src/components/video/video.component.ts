import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'webex-video',
  templateUrl: './video.component.html',
  styleUrls:['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent implements AfterViewInit {

    @Input() videoUrl: string;
    @Input() videoTitle: string;

    public get safeVideoUrl() {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    }

    @ViewChild('mcontent') mcontent: ElementRef;

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      this.resize();
    }

    constructor(
      private viewContainerRef: ViewContainerRef,
      private sanitizer: DomSanitizer
      ) {
   
    }

    ngAfterViewInit() {
      this.resize();
    }

    resize() {
      let _w = this.viewContainerRef.element.nativeElement.clientWidth || 1080;
      let _margin = 20;
      if(_w < 560) {
        _margin = 16;
      } else if(_w < 1080) {
        _margin = 64;
      } else {
        _margin = 176;
      }
      _w = _w - _margin * 2;
      let _h = _w * 1080 / 1920 >> 0;
      this.mcontent.nativeElement.style.width = _w + 'px';
      this.mcontent.nativeElement.style.height = _h + 'px';
      this.mcontent.nativeElement.style.marginLeft = _margin + 'px';
    }

    html(str:string) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }

}
