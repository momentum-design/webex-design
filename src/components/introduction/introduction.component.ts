import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webex-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @Input() date: string;
  @Input() title: string = 'Webex Design throws its hat in the ring for FastCo’s Innovation by Design Awards';
  @Input() description: string = "See the unique story we told on removing friction from hybrid work.";
  @Input() url: string;
  @Input() link: string='Read more';
  @Input() imageUrl: string='https://webex.design/w.5ca20d3744316707.svg';   

  get backgroundImageUrl(): string {
    return `url('${this.imageUrl}')`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
