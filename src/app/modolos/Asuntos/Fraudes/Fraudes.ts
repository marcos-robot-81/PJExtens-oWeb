import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Bt } from "../../coponetes/botao/Bt";

@Component({
    selector: 'Fraudes',
    templateUrl: './2.html',
    styleUrls: ['../../../../assets/css/global.css',"./2.css"],
    imports: [NgOptimizedImage, Bt],
})
export class Fraudes {
IM = 'assets/images/celula.png';
at = "aa";
}