import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Bt } from "../../coponetes/botao/Bt";

@Component({
    selector: "Ransomware",
    templateUrl: "./4.html",
    styleUrls: ['./../../../../assets/css/global.css','./4.css'],
    imports: [NgOptimizedImage, Bt],
}) export class Ransomware {
    IM = '/assets/images/sequestro.png';
    at = "aa";
    IM2 = '/assets/images/vazamento.png';
    at2 = "aa";
}