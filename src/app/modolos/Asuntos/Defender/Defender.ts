import {  Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Bt } from "../../coponetes/botao/Bt";

@Component({
    selector: "Defender",
    templateUrl: "./6.html",
    styleUrls: ['./../../../../assets/css/global.css','./6.css'],
    imports: [NgOptimizedImage, Bt],
}) export class Defender {
    IM = '/assets/images/defender.png';
    at = '';
    IM2 = '/assets/images/vitima.png';
    at2 = '';

}