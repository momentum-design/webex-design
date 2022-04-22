import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   templateUrl: './stories.component.html',
   styleUrls: ['./stories.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {

}
