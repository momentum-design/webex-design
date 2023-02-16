import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';
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
      private sanitizer: DomSanitizer,
      private cd: ChangeDetectorRef
      ) {
   
    }

    ngAfterViewInit() {
      this.resize();
    }

    resize() {
      Promise.resolve().then(()=>{
          let _w = this.viewContainerRef.element.nativeElement.clientWidth || 1080;
          let _h = _w * 1080 / 1920 >> 0;
          this.mcontent.nativeElement.style.height = _h + 'px';
          this.forceUpdate();
      });
    }

    html(str:string) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }

    private forceUpdate() {
      if (this.cd) {
          this.cd.detectChanges();
      }
  }

}
