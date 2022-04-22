type IPosition = {
    x: number;
    y: number;
};

export const DomHelper = {
    postion(dom: any): IPosition {
        let rect = dom.getBoundingClientRect();
        return { 
            x: rect.left + DomHelper.scrollLeft(), 
            y: rect.top + DomHelper.scrollTop()
        };
    },
    scrollHeight():number {
        return document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    },
    scrollWidth():number {
        return document.documentElement.scrollWidth || document.body.scrollWidth || 0;
    },
    scrollTop(top?:number) {
        if (typeof top=== "number") {
            document.body.scrollTop = document.documentElement.scrollTop = top;
            return top;
        }
        else {
            return Math.max(document.documentElement.scrollTop, document.body.scrollTop, window.pageYOffset, 0);
        }
    },
    scrollLeft(left?:number) {
        if (typeof left=== "number") {
            document.body.scrollLeft = document.documentElement.scrollLeft = left;
            return left;
        }
        else {
            return Math.max(document.documentElement.scrollLeft, document.body.scrollLeft, window.pageXOffset, 0);
        }
    },
    clientHeight():number {
        return document.documentElement.clientHeight || document.body.clientHeight || 0;
    },
    clientWidth():number {
        return document.documentElement.clientWidth || document.body.clientWidth || 0;
    }
};
