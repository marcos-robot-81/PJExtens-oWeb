import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { Bt } from "../../coponetes/botao/Bt";

@Component({
    selector: "Cenario",
    standalone: true,
    templateUrl: "./s1.html",
    styleUrls: ["./s1.css","../../../../assets/css/global.css"],
    imports: [NgOptimizedImage, Bt]
}) export class Cenario {
    readonly IM = 'assets/images/mapa.png';
    readonly at = 'Mapa do Brasil com visualização de dados de cibersegurança sobreposto.';

    readonly IM2 = 'assets/images/baco.png';

}