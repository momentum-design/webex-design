import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import mframe from 'mframe';

interface INav {
  path: string,
  name: string
}

@Component({
  selector: 'webex-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit  {

  motion:any;
  isShowMenu:boolean = false;
  public navs: INav[];
  public title: string = '';

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('menu_title') menu_title: ElementRef;
  @ViewChild('menu_btn_path_1') menu_btn_path_1: ElementRef;
  @ViewChild('menu_btn_path_2') menu_btn_path_2: ElementRef;
  @ViewChild('menu_btn_path_3') menu_btn_path_3: ElementRef;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private router: Router
    ) {
    this.initNav();
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.title = event.url.split('/')[1] || '';
        if(this.isShowMenu) {
          this.closeMenu();
        }
      }
    });
  }

  ngAfterViewInit() {
    this.initMotion();
  }

  clickMenu(e: any) {
    if(this.isShowMenu) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
    e.stopPropagation();
  }

  private initNav() {
    this.navs = this.router.config.filter((cfg)=>{
      return cfg.data && typeof cfg.data.navIndex === 'number';
    }).sort((cfg1,cfg2)=>{
      if(cfg1.data && cfg2.data) {
        return cfg1.data.navIndex - cfg2.data.navIndex;
      }
      return -1;
    }).map((cfg)=>{
      const path = cfg.path || '';
      return {
        path: path,
        name: path === ''? 'home' : path,
      }
    }).sort();
  }

  private closeMenu() {
    this.isShowMenu = false;
    this.motion.stop();
    this.motion.reverse();
  }

  private openMenu() {
    this.isShowMenu = true;
    this.motion.stop();
    this.motion.play();
  }

  hideMenum(e:any) {
    if(this.isShowMenu) {
      this.closeMenu();
    }
    e.stopPropagation();
  }

  private initMotion() {
    const menu = this.menu.nativeElement as HTMLElement;
    const navs = menu.querySelectorAll('a');
    this.motion= mframe([{
      dom: [this.viewContainerRef.element.nativeElement, menu],
      frames:[
        {css: { height:'0%' }, time:0},
        {css: { height:'100%' }, tween: 'easeInOut', time:10},
      ]
    },{
      dom: this.menu_title.nativeElement, menu,
      frames:[
        {css: { opacity:'1.0' }, time:0},
        {css: { opacity:'0' }, tween: 'easeInOut', time:10},
      ]
    },{
      dom: this.menu_btn_path_1.nativeElement,
      frames:[
        {attr: { d:'M2 5 l10 0 l10 0' }, time:0},
        {attr: { d:'M4 4 l8 8 l8 8' }, tween: 'easeInOut', time:30},
      ]
    },{
      dom: this.menu_btn_path_2.nativeElement,
      frames:[
        {attr: { d:'M2 11 l10 0 l10 0' }, time:0},
        {attr: { d:'M12 11 l0 0 l0 0' }, tween: 'easeInOut', time:30},
      ]
    },{
      dom: this.menu_btn_path_3.nativeElement,
      frames:[
        {attr: { d:'M2 17 l10 0 l10 0' }, time:0},
        {attr: { d:'M4 20 l8 -8 l8 -8' }, tween: 'easeInOut', time:30},
      ]
    }]);

    const step = 5;
    navs.forEach((nav, index)=>{
      this.motion.add([{
        dom:nav,
        frames:[
          { css: { 'background-image':'linear-gradient(to right, #ffffff 0%, #181818 0%)' },  time:index*step },
          { css: { 'background-image':'linear-gradient(to right, #ffffff 0%, #181818 100%)' }, tween: 'easeIn',   time:index*step+15 },
          { css: { 'background-image':'linear-gradient(to right, #ffffff 100%, #181818 100%)' }, tween: 'easeOut',  time:index*step+30},
        ]
      }], false);
    });
  }

}
