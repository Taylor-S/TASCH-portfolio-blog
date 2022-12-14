import { animate, query, state, style, transition, trigger } from '@angular/animations';

export const burgerMenuAnimations = [
    trigger('burgerMenuTop', [
        state('menuClosed',
            style({ transform: 'none' })
        ),
        state('menuOpen',
            style({ transform: 'rotate(45deg) translate(0.5rem, 0.5rem)' })
        ),
        transition('menuClosed <=> menuOpen', [
            animate('0.2s ease-out')
        ]),
    ]),
    trigger('burgerMenuMiddle', [
        state('menuClosed',
            style({ opacity: 1 })
        ),
        state('menuOpen',
            style({ opacity: 0 })
        ),
        transition('menuClosed <=> menuOpen', [
            animate('0.2s ease-out')
        ]),
    ]),
    trigger('burgerMenuBottom', [
        state('menuClosed',
            style({ transform: 'none' })
        ),
        state('menuOpen',
            style({ transform: 'rotate(-45deg) translate(0.1875rem, -0.25rem)' })
        ),
        transition('menuClosed <=> menuOpen', [
            animate('0.2s ease-out')
        ]),
    ]),
];
