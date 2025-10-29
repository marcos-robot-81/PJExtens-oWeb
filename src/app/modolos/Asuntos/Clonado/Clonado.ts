import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Bt } from "../../coponetes/botao/Bt";

@Component({
    selector: "Clonado",
    templateUrl: "./3.html",
    styleUrls: ['./../../../../assets/css/global.css','./3.css'],
    imports: [NgOptimizedImage, Bt],

}) export class Clonado {
IM = 'assets/images/cartao.png';
at = "aa";
IM2 = 'assets/images/linhas.png';
}