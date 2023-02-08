export class Responsive {

    static width(containerW: number) {
        if(containerW < 560) {
          return containerW -32;
        } else if(containerW < 1080) {
          return containerW -64;
        } else if(containerW < 1440) {
          return 1440 - 284;
        } else if(containerW < 1920) {
          return 1920 - 360;
        } else if(containerW <= 2560){
          return 2560 - 480;
        } else {  
          return 2560;
        }
    }

    static _resize(elements:NodeListOf<HTMLElement>, w:number) {
        elements.forEach((el)=>{
            el.style.maxWidth = w+'px';
        });
    }

    static resize() {
      let body = document.querySelector('body') as HTMLElement;
      let elements = document.querySelectorAll('.container-middle');
      if(body && elements.length>0) {
        let w = Responsive.width(body.clientWidth || 1080);
        this._resize(elements as NodeListOf<HTMLElement>, w);
      }
    }
}