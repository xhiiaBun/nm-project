
import{
    animate,
    state,
    style,
    transition,
    trigger
} from "@angular/animations";

const animations = [
    //, border: "1px solid cyan"
    trigger("animateMenu", [
        state("desktop-alone", style({width: "70%"})),
        state("mobile-alone", style({width: "80%"})),
        state("desktop-two", style({width: "30%"})),
        state("mobile-two", style({width: "100%"})),
        transition("desktop-alone <=> desktop-two", [animate("2s")]),
        transition("mobile-alone <=> mobile-two", [animate("2s")])
    ]),

    //, border: "1px solid purple"
    trigger("animateGameSection", [
        state("desktop-alone", style({display: "none", width: "10%"})),
        state("mobile-alone", style({display: "none", width: "10%"})),
        state("desktop-two", style({display: "block", width: "70%"})),
        state("mobile-two", style({display: "block", width: "100%"})),
        transition("desktop-alone <=> desktop-two", [animate("2s")]),
        transition("mobile-alone <=> mobile-two", [animate("2s")])
    ])
];

export function getAnimations(){
    return animations;
}