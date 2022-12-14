import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition('void => *', [ 
      style({ opacity: 0 }),           // initial styles
      animate('0.3s ease-out',
        style({ opacity: 1 })          // final style after the transition has finished
      )
    ]),
    transition('* => void', [
      animate('.3s ease-out', 
        style({ opacity: 0 })          // we asume the initial style will be always opacity: 1
      ) 
    ])
  ]) 