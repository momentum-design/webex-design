import { IScrollMotionConfig, IScrollMotion } from '@types';
import { DomHelper } from './dom-helper';

export class ScrollMotionMin implements IScrollMotion {
    scrollMotion:any;
    scrollMotionConfig: IScrollMotionConfig;
    preScroll?:number|null;
    isPlayingScrollDown?: boolean= false;
    checkScroll() {}
    initMotion() {}
}

export const ScrollMotionHelper = {
    getInRange(n:number, min: number, max: number):number {
        return Math.min(max, Math.max(min, n));
    },
    getDomViewRange(dom:Element, startPlus:number=0, endPlus: number=0, startEndPlus:number=0, endStartPlus: number=0):IScrollMotionConfig {
        const domY = DomHelper.postion(dom).y>>0;
        const viewHeight =  window.innerHeight;
        const scrollMin = 0;
        const scrollMax = DomHelper.scrollHeight();
        const showStart = domY-viewHeight;
        const hideEnd = domY+dom.clientHeight;
        return {
            show: {
                start: ScrollMotionHelper.getInRange(showStart+startPlus, scrollMin, scrollMax),
                end: ScrollMotionHelper.getInRange(showStart+dom.clientHeight+startEndPlus, scrollMin, scrollMax)
            },
            hide: {
                start: ScrollMotionHelper.getInRange(hideEnd-dom.clientHeight+endStartPlus, scrollMin, scrollMax),
                end: ScrollMotionHelper.getInRange(hideEnd+endPlus, scrollMin, scrollMax)
            }
        }
    },
    getScrollRelativePosition(position:number, start:number, end: number):number {
        if(position <= start) {
            return 0;
        } else if(position >= end) {
            return end - start;
        } else {
            return position - start;
        }
    },
    reset(component: IScrollMotion) {
        if(component.scrollMotion) {
            component.scrollMotion.stop();
            component.preScroll = null;
            component.isPlayingScrollDown = false;
        }
    },
    isScrollDown(y:number ,component: IScrollMotion) {
        return component.preScroll!=null ? y>=component.preScroll : y>=component.scrollMotionConfig.hide.start;
            
    },
    checkScroll(component: IScrollMotion) {
        const y = DomHelper.scrollTop();
        if(component.scrollMotion && component.scrollMotionConfig) {// scroll down in trigger area && not start to play
            if(ScrollMotionHelper.isScrollDown(y, component) && y>=component.scrollMotionConfig.show.end) {
                if(!component.isPlayingScrollDown) {
                    component.scrollMotion.stop();
                    component.isPlayingScrollDown = true;
                    component.scrollMotion.play();
                }
            // scroll up in trigger areaf && not start to play
            } else if(y<=component.scrollMotionConfig.hide.start) {
                if(component.isPlayingScrollDown) {
                    component.scrollMotion.stop();
                    component.isPlayingScrollDown = false;
                    component.scrollMotion.reverse();
                }
            }
        }
        component.preScroll = y;
    },
    checkScrollAttach(component: IScrollMotion) {
        if(component.scrollMotion && component.scrollMotionConfig) {
            const y = DomHelper.scrollTop();
            const frameIndex = ScrollMotionHelper.getScrollRelativePosition(y, component.scrollMotionConfig.show.end, component.scrollMotionConfig.hide.start);
            if(component.scrollMotion.CurrentFrame!==frameIndex) {
                component.scrollMotion.state(frameIndex, ScrollMotionHelper.isScrollDown(y, component));
            }
        }
    }
};